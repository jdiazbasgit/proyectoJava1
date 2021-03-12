package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.entidades.Access;
import curso.generation.demo.repositorios.AccessCRUDRepository;

@RestController
public class DemoRestController {

	@Autowired
	private AccessCRUDRepository repository;

	// @RequestMapping(value="api/accesosMes",method = RequestMethod.POST)

	@PostMapping(value = "api/accesosMes")
	// public Iterable<Access> getAccesosByanioAndMes(@RequestBody DatosAccesoMes
	// dato){
	public Iterable<Access> getAccesosByanioAndMes(@RequestParam int mes, @RequestParam int anio) {

		return getRepository().getAccessByAnioAndMes(anio, mes);
	}

	@PostMapping(value = "api/accesosMesNombre")
	public Iterable<Access> getAccesosByanioAndMesNombre(@RequestBody DatosAccesosMes dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(), dato.getMes(), dato.getNombre());
	}
	
	@PostMapping(value = "api/accesosMesNombreAnio")
	public Iterable<Access> getAccesosByanioAndMesNombreAnio(@RequestBody DatosAccesosMes dato) {

		return getRepository().getAccessByAnioAndMesAndName(dato.getAnioOrigen(),dato.getAnioFinal(), dato.getMes(), dato.getNombre());
	}

	public AccessCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(AccessCRUDRepository repository) {
		this.repository = repository;
	}
}
