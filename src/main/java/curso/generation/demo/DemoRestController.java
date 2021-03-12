package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	private UsersCRUDRepository repositoryUser;

	// @RequestMapping(value="api/accesosMes",method = RequestMethod.POST)
	@PostMapping(value = "api/verLogin")
	public String getUserByUsuarioAndClave(@RequestParam String usuario, @RequestParam String clave) {

		if (getRepositoryUser().getUserByUsuarioAndClave(usuario, clave) != null)
			return getRepositoryUser().getUserByUsuarioAndClave(usuario, clave).getRole().getRol();
		else
			return "no tienes rol";
	}

	@PostMapping(value = "api/accesosMes")
	// public Iterable<Access> getAccesosByanioAndMes(@RequestBody DatosAccesoMes
	// dato){
	public Iterable<Access> getAccesosByanioAndMes(@RequestParam int mes, @RequestParam int anio) {

		return getRepository().getAccessByAnioAndMes(anio, mes);
	}

	@PostMapping(value = "api/accesosMesNombre")
	public Iterable<Access> getAccesosByanioAndMesNombre(@RequestBody DatosAccesoMes dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(), dato.getMes(), dato.getNombre());
	}

	@PostMapping(value = "api/accesosMesNombreAnio")
	public Iterable<Access> getAccesosByanioAndMesNombreAnio(@RequestBody DatosAccesoMes dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(), dato.getAnioFinal(), dato.getMes(),
				dato.getNombre());
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

	public void setRepositoryUser(UsersCRUDRepository repository2) {
		this.repositoryUser = repository2;
	}

}
