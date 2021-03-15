package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import curso.generation.demo.entidades.Day;
import curso.generation.demo.repositorios.DaysCRUDRepository;

@Controller
public class DemoController {
	
	
	@Autowired
	private DaysCRUDRepository repository;
	
	
	@GetMapping("/")
	public String index() {
		
		return "index";
		
	}
	
	@GetMapping("/login")
	public String login() {
		
		return "login";
		
	}
	
	
	
	
	@GetMapping("/jornadas")
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

}

