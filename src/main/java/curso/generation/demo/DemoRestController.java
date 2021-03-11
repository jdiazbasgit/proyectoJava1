package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.entidades.Access;
import curso.generation.demo.repositorios.AccessesCRUDRepository;

@RestController
public class DemoRestController {
	
	@Autowired
	private AccessesCRUDRepository repository;
	
	//@RequestMapping(value="api/accesosMes")
	@PostMapping("api/accesosMes")
	public Iterable<Access> getAccessossByAnioAndMes(@RequestBody DatosAccesoMes dato){
		
		return getRepository().getAccessByAnioAndMes(dato.getAnio(), dato.getMes());
	}

	public AccessesCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(AccessesCRUDRepository repository) {
		this.repository = repository;
	}
	
}
