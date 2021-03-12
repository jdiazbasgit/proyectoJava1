package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

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



	public DaysCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(DaysCRUDRepository repository) {
		this.repository = repository;
	}
}
