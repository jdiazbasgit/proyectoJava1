package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;

import curso.generation.demo.entidades.Day;
import curso.generation.demo.repositorios.DaysCRUDRepository;

@SpringBootApplication
public class DemoBootApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoBootApplication.class, args);

	}
	
}
