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
	private UsersCRUDRepository repositoryUser;

	// @RequestMapping(value="api/accesosMes",method = RequestMethod.POST)

	@PostMapping(value = "api/accesosMes")
	// public Iterable<Access> getAccesosByanioAndMes(@RequestBody DatosAccesoMes
	// dato){
	public Iterable<Access> getAccesosByanioAndMes(@RequestParam int mes, @RequestParam int anio) {

		return getRepository().getAccessByAnioAndMes(anio, mes);
	}

	@PostMapping(value = "user")
	public UserDto verLogin(@RequestParam String user, @RequestParam String password, HttpServletResponse response) throws IOException {

		User userDetails = getRepositoryUser().findByUserName(user);
		UserDto userDto = new UserDto();
		if (userDetails.getPassword().equals(password)) {
			userDto.setUser(userDetails.getUser());
			userDto.setRol(userDetails.getRole().getRol());
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

	public AccessesCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(AccessesCRUDRepository repository) {
		this.repository = repository;
	}

	public UsersCRUDRepository getRepositoryUser() {
		return repositoryUser;
	}

	public void setRepositoryUser(UsersCRUDRepository repositoryUser) {
		this.repositoryUser = repositoryUser;
	}
}