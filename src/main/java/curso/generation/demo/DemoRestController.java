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
	
	public static String UNAUTHORIZED="Usuario o clave incorrectos";
	
	
	@Autowired
	private AccessesCRUDRepository repository;
	
	@Autowired
	private UsersCRUDRepository repository2;
	
	@PostMapping("api/accesosMes")
	public Iterable<Access> getAccesosByAnioAndMes(@RequestBody DatosAccesoMes data){
		return getRepository().getAccessByAnioAndMes(data.getAnioOrigen(), data.getMes());
	}
	
	@PostMapping("api/accesosMesNombre")
	public Iterable<Access> getAccesByAnioAndMesAndName(@RequestBody DatosAccesoMes data){
		return getRepository().getAccesByAnioAndMesAndName(data.getAnioOrigen(), data.getMes(), data.getNombre());
	}
	
	@PostMapping("api/accesosMesNombreAnio")
	public Iterable<Access> getAccesByAnioAndMesAndNameAnio(@RequestBody DatosAccesoMes data){
		return getRepository().getAccesByAnioAndMesAndName(data.getAnioOrigen(), data.getAnioFinal(), data.getMes(), data.getNombre());
	}
	@PostMapping("api/user")
	public UserDto getLoginUser(@RequestParam String user, @RequestParam String password, HttpServletResponse response) throws IOException{
//		if(getRepository2().getLoginUser(user, password) != null) {
//			return getRepository2().getLoginUser(user, password).getRole().getRole();
//		}else {
//			return "Sin acceso";
//		}
		
		User userDetails = getRepository2().findByUserName(user);
		UserDto userDto = new UserDto();
		if (userDetails.getPassword().equals(password)) {
			userDto.setUser(userDetails.getUser());
			userDto.setRol(userDetails.getRole().getRole());
			userDto.setToken(getJWTToken(user, userDto.getRol()));
			return userDto;
		}
		else
		{
			response.setStatus(HttpServletResponse.SC_FORBIDDEN);
			response.sendError(HttpServletResponse.SC_FORBIDDEN,DemoRestController.UNAUTHORIZED);
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

	/**
	 * @return the repository
	 */
	public AccessesCRUDRepository getRepository() {
		return repository;
	}

	/**
	 * @param repository the repository to set
	 */
	public void setRepository(AccessesCRUDRepository repository) {
		this.repository = repository;
	}

	/**
	 * @return the repository2
	 */
	public UsersCRUDRepository getRepository2() {
		return repository2;
	}

	/**
	 * @param repository2 the repository2 to set
	 */
	public void setRepository2(UsersCRUDRepository repository2) {
		this.repository2 = repository2;
	}
	
	
	
}
