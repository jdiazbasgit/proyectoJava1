package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.entidades.Access;
import curso.generation.demo.entidades.Role;
import curso.generation.demo.repositorios.AccessesCRUDRepository;
import curso.generation.demo.repositorios.UsersCRUDRepository;

@RestController
public class DemoRestController {
	
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
	public String getLoginUser(@RequestParam String user, String password) {
		if(getRepository2().getLoginUser(user, password) != null) {
		return getRepository2().getLoginUser(user, password).getRole().getRole();
		}else {
			return "Sin acceso";
		}
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
