package curso.generation.demo.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Conditional;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import curso.generation.demo.entidades.Day;
import curso.generation.demo.repositorios.DaysCRUDRepository;

@Controller
public class DemoController {
	
	@RequestMapping ("/")
	public String index() {
		
		return "index";
		
	}
	
	@RequestMapping ("/login")
	public String login() {
		
		return "login";
		
	}

}
