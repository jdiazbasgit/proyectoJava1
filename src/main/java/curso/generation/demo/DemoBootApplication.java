package curso.generation.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import curso.generation.demo.entidades.Day;
import curso.generation.demo.filters.JWTAutorizationFilter;
import curso.generation.demo.repositorios.DaysCRUDRepository;

@SpringBootApplication
public class DemoBootApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(DemoBootApplication.class, args);

	}
	
	@Configuration
	@EnableWebSecurity
	class WebSecurityConfig extends WebSecurityConfigurerAdapter {
		
		 @Override
		 protected void configure(HttpSecurity http) throws Exception{
			 http.csrf().disable()
			  .addFilterAfter(new JWTAutorizationFilter(), UsernamePasswordAuthenticationFilter.class)
			  .authorizeRequests()
			  .antMatchers("/api/user").permitAll()
			  .anyRequest().authenticated();
		 }
	}
	
}
