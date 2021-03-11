package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import curso.generation.demo.entidades.Access;
import curso.generation.demo.entidades.User;
import curso.generation.demo.repositorios.AccessesCRUDRepository;
import curso.generation.demo.repositorios.UsersCRUDRepository;

@RestController
public class DemoRestController {

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
