package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

import curso.generation.demo.entidades.Day;
import curso.generation.demo.repositorios.DaysCRUDRepository;

@SpringBootApplication
//@EnableWebMvc 

public class DemoBootApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(DemoBootApplication.class, args);

	}
	
}
