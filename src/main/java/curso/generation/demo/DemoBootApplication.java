package curso.generation.demo;

import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;


@SpringBootApplication
public class DemoBootApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(DemoBootApplication.class, args);

	}
	
}
