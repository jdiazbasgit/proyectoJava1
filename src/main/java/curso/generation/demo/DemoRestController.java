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
	
	
	
}
