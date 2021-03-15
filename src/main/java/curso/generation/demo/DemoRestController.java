package curso.generation.demo;

import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.entidades.Access;
import curso.generation.demo.entidades.User;
import curso.generation.demo.repositorios.AccessesCRUDRepository;
import curso.generation.demo.repositorios.UsersCRUDRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
public class DemoRestController {

	private static final String UNAUTHORIZED = "Variable incorrecta";

	@Autowired
	private AccessesCRUDRepository repository;

	@Autowired
	private UsersCRUDRepository repository2;

	// @RequestMapping(value="api/accesosMes", method = RequestMethod.POST)
	@PostMapping("api/accesosMes")
	public Iterable<Access> getAccesosByAnioAndMes(@RequestBody DatosAccesoMes dato) {
		return getRepository().getAccessByAnioAndMes(dato.getAnio(), dato.getMes());
	}

	@PostMapping("api/accesosMesNombre")
	public Iterable<Access> getAccesosByAnioAndMesNombre(@RequestBody DatosAccesoMes dato) {
		return getRepository().getAccessByAnioAndMesAndName(dato.getAnio(), dato.getMes(), dato.getNombre());
	}

	@PostMapping("api/usuariosPass")
	public String getUsuarioByUsuarioAndClave(@RequestParam String user, String password) {
		if (getRepository2().getUserByUserAndPassword(user, password) != null)
			return getRepository2().getUserByUserAndPassword(user, password).getRol().getRol();
		else
			return "No tienes rol.";
	}
	
	@PostMapping(value = "user")
	public UserDto usuariosLogin(@RequestParam String user, String password, HttpServletResponse response) throws IOException {
		
		User userDetails = getRepository2().findByUserName(user);
		UserDto userDto = new UserDto();
		if(userDetails.getPassword().equals(password)) {
			userDto.setUser(userDetails.getUser());
			userDto.setRol(userDetails.getRol().getRol());
			userDto.setToken(getJWTToken(user, userDto.getRol()));
			return userDto;
		}else {
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			response.sendError(HttpServletResponse.SC_FORBIDDEN, DemoRestController.UNAUTHORIZED);
			return null;
		}
	}

	private String getJWTToken(String user, String rol) {
		String secretKey = "generation";
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils.commaSeparatedStringToAuthorityList(rol);

		String token = Jwts.builder().setId("cursoJWT").setSubject(user)
				.claim("authorities",
						grantedAuthorities.stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 600000))
				.signWith(SignatureAlgorithm.HS512, secretKey.getBytes()).compact();

		return "Bearer " + token;
	}

	public AccessesCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(AccessesCRUDRepository repository) {
		this.repository = repository;
	}

	public UsersCRUDRepository getRepository2() {
		return repository2;
	}

	public void setRepository2(UsersCRUDRepository repository2) {
		this.repository2 = repository2;
	}

}
