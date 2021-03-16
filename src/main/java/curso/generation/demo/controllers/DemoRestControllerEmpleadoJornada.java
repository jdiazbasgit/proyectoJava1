package curso.generation.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.entidades.Employee;
import curso.generation.demo.repositorios.DayCRUDRepository;
import curso.generation.demo.repositorios.EmployeeCRUDRepository;
import curso.generation.demo.entidades.Day;
@RestController
public class DemoRestControllerEmpleadoJornada {

	@Autowired
	private EmployeeCRUDRepository repositoryEmpleadosParaEmpleadosJornadas;
	
	@Autowired
	private DayCRUDRepository repositoryJornadaParaEmpleadosJornadas;
	
	@GetMapping(value="api/empleadosParaEmpleadosJornadas")
	@CrossOrigin(origins = "*")
	public Iterable<Employee> getEmpleadosJornadas(){
		return getRepositoryEmpleadosJornadas().findAll();
	}
	
	
	@GetMapping(value="api/jornadasParaEmpleadosJornadas")
	@CrossOrigin(origins = "*")
	public Iterable<Day> getJornadasParaEmpleadosJornadas(){
		return getRepositoryJornadaParaEmpleadosJornadas().findAll();
	}
	
	
	public EmployeeCRUDRepository getRepositoryEmpleadosJornadas() {
		return repositoryEmpleadosParaEmpleadosJornadas;
	}

	public void setRepositoryEmpleadosJornadas(EmployeeCRUDRepository repositoryEmpleadosJornadas) {
		this.repositoryEmpleadosParaEmpleadosJornadas = repositoryEmpleadosJornadas;
	}

	public DayCRUDRepository getRepositoryJornadaParaEmpleadosJornadas() {
		return repositoryJornadaParaEmpleadosJornadas;
	}

	public void setRepositoryJornadaParaEmpleadosJornadas(DayCRUDRepository repositoryJornadaParaEmpleadosJornadas) {
		this.repositoryJornadaParaEmpleadosJornadas = repositoryJornadaParaEmpleadosJornadas;
	}
}
