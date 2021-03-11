package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.entidades.Access;
import curso.generation.demo.repositorios.AccessCRUDRepository;
import curso.generation.demo.repositorios.UserCRUDRepository;

@RestController
public class DemoRestController {

	@Autowired
	private AccessCRUDRepository repository;
	
	@Autowired
	private UserCRUDRepository repository1;

	@PostMapping(value = "api/accesosMes")
	public Iterable<Access> getAccessByAnioAndMes(@RequestParam int mes, @RequestParam int anio) {

		return getRepository().getAccessByAnioAndMes(anio, mes);
	}

	@PostMapping(value = "api/accesosMesNombre")
	public Iterable<Access> getAccessByAnioAndMesNombre(@RequestBody DatosAccesoMes dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(), dato.getMes(), dato.getNombre());
	}

	@PostMapping(value = "api/accesosMesNombreAnio")
	public Iterable<Access> getAccessByAnioAndMesNombreAnio(@RequestBody DatosAccesoMes dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(), dato.getAnioFinal(), dato.getMes(),
				dato.getNombre());
	}
	
	
	@PostMapping(value = "api/verLogin")
	public String getLogin(@RequestParam String user, @RequestParam String password) {

		if (getRepository1().getUser(user, password) != null) {
			
			return getRepository1().getUser(user, password).getRol().getRol();
			
		} else {
			return "No hay rol";
		}
		
	}
	

	public AccessCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(AccessCRUDRepository repository) {
		this.repository = repository;
	}

	public UserCRUDRepository getRepository1() {
		return repository1;
	}

	public void setRepository1(UserCRUDRepository repository1) {
		this.repository1 = repository1;
	}

}