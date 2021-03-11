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

	// @RequestMapping(value="api/accesosMes",method = RequestMethod.POST)
	@PostMapping(value = "login")
	public User getUserByUsuarioAndClave(@RequestParam String usuario, @RequestParam String clave) {
		
		return getRepository2().getUserByUsuarioAndClave(usuario, clave);
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

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(),dato.getAnioFinal(), dato.getMes(), dato.getNombre());
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
