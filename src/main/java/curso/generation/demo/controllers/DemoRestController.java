package curso.generation.demo.controllers;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.anotaciones.Vigilado;
import curso.generation.demo.beans.DatosAccesosMes;
import curso.generation.demo.beans.UserFront;
import curso.generation.demo.dtos.UserDto;
import curso.generation.demo.entidades.Access;
import curso.generation.demo.entidades.User;
import curso.generation.demo.repositorios.AccessCRUDRepository;
import curso.generation.demo.repositorios.UserCRUDRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class DemoRestController {

	public static String UNAUTHORIZED = "Usuario o clave incorrectos";

	@Autowired
	
	private AccessCRUDRepository repository;

	@Autowired
	private UserCRUDRepository repositoryUser;

	// @RequestMapping(value="api/accesosMes",method = RequestMethod.POST)

	@PostMapping(value = "api/accesosMes")
	// public Iterable<Access> getAccesosByanioAndMes(@RequestBody DatosAccesoMes
	// dato){
	public Iterable<Access> getAccesosByanioAndMes(@RequestParam int mes, @RequestParam int anio) {

		return getRepository().getAccessByAnioAndMes(anio, mes);
	}

	@PostMapping(value = "api/accesosMesNombre")
	public Iterable<Access> getAccesosByanioAndMesNombre(@RequestBody DatosAccesosMes dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(), dato.getMes(), dato.getNombre());
	}

	@PostMapping(value = "api/accesosMesNombreAnio")
	public Iterable<Access> getAccesosByanioAndMesNombreAnio(@RequestBody DatosAccesosMes dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(), dato.getAnioFinal(), dato.getMes(),
				dato.getNombre());
	}

	@PostMapping(value = "user")
	@Vigilado
	public UserDto verLogin(@RequestBody UserFront userFront, HttpServletResponse response)  
			throws IOException,NumberFormatException{
		
			Integer.parseInt("a");
		
		Optional<User> userDetails = getRepositoryUser().findByUserName(userFront.getUser());
		UserDto userDto = new UserDto();
		if (userDetails.get().getPassword().equals(userFront.getPassword())) {
			userDto.setUser(userDetails.get().getUser());
			userDto.setRol(userDetails.get().getRol().getRol());
			userDto.setToken(getJWTToken(userFront.getUser(), userDto.getRol()));
			return userDto;
		} else {
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			response.sendError(HttpServletResponse.SC_FORBIDDEN, DemoRestController.UNAUTHORIZED);
			return null;
		}

	}

	private String getJWTToken(String username, String rol) {
		String secretKey = "generation";
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList(rol);

		String token = Jwts.builder().setId("cursoJWT").setSubject(username)
				.claim("authorities",
						grantedAuthorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 600000))
				.signWith(SignatureAlgorithm.HS512, secretKey.getBytes()).compact();

		return "Bearer " + token;
	}

	public AccessCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(AccessCRUDRepository repository) {
		this.repository = repository;
	}

	public UserCRUDRepository getRepositoryUser() {
		return repositoryUser;
	}

	public void setRepositoryUser(UserCRUDRepository repositoryUser) {
		this.repositoryUser = repositoryUser;
	}
}
