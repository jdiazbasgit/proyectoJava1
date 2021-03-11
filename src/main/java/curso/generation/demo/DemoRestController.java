package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.entidades.Access;
import curso.generation.demo.repositorios.AccessesCRUDRepository;
import curso.generation.demo.repositorios.UsersCRUDRepository;

@RestController
public class DemoRestController {

	@Autowired
	private AccessesCRUDRepository repository;
	@Autowired
	private UsersCRUDRepository repositoryUsers;

	// @RequestMapping(value="api/accesosMes",method = RequestMethod.POST)

	// @PostMapping(value = "api/accesosMes")
	// public Iterable<Access> getAccesosByanioAndMes(@RequestBody DatosAcceso
	// dato){
	// return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(),
	// dato.getMes());
	// }

	@PostMapping("api/getRole")
	public String getRoleFromUserAndPassword(@RequestParam String user, String password) {

		if (getRepositoryUsers().getUserByUserAndPassword(user, password) != null)
			return getRepositoryUsers().getUserByUserAndPassword(user, password).getRole().getRole();
		else
			return "no existe el usuario, por lo tanto no hay rol";
	}

	@PostMapping(value = "api/accesosMes")
	public Iterable<Access> getAccesosByanioAndMes(@RequestParam int mes, @RequestParam int anio) {
		return getRepository().getAccessByAnioAndMes(anio, mes);
	}

	@PostMapping(value = "api/accesosMesNombre")
	public Iterable<Access> getAccesosByanioAndMesNombre(@RequestBody DatosAcceso dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(), dato.getMes(), dato.getNombre());
	}

	@PostMapping(value = "api/accesosMesNombreAnio")
	public Iterable<Access> getAccesosByanioAndMesNombreAnio(@RequestBody DatosAcceso dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(), dato.getAnioFinal(), dato.getMes(),
				dato.getNombre());
	}

	public AccessesCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(AccessesCRUDRepository repository) {
		this.repository = repository;
	}

	public UsersCRUDRepository getRepositoryUsers() {
		return repositoryUsers;
	}

	public void setRepositoryUsers(UsersCRUDRepository repositoryUsers) {
		this.repositoryUsers = repositoryUsers;
	}

}
