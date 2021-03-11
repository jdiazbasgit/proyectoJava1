package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Conditional;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import curso.generation.demo.entidades.Day;
import curso.generation.demo.entidades.Employee;
import curso.generation.demo.repositorios.DaysCRUDRepository;
import curso.generation.demo.repositorios.EmployeesCRUDRepository;

@Controller
public class DemoController {
	
//DAYS
	/*@Autowired
	private DaysCRUDRepository repository;
	
	
	@RequestMapping("/jornadas")
	public String verDatos() {
		
		
		Iterable<Day> jornadas=getRepository().getJornadasConUno(false);
		for (Day day : jornadas) {
			System.out.println(day.getDescripcion());
		}
		return "pepe";
	}


	public DaysCRUDRepository getRepository() {
		return repository;
	}


	public void setRepository(DaysCRUDRepository repository) {
		this.repository = repository;
	}
*/
	@RequestMapping("/")
	public String index() {
		
		return "index";
		
	}
	
//Employee
	
	//private EmployeesCRUDRepository employeesRepository;
	
	/*
	 * @RequestMapping("/employees") public String verEmployees() {
	 * 
	 * Iterable<Employee> empleados=(Iterable<Employee>)getRepository().findAll();
	 * 
	 * return ""; }
	 */
}
