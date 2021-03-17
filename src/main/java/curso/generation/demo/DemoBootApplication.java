package curso.generation.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
@EnableAspectJAutoProxy
@EnableWebMvc
@CrossOrigin(origins="*")
public class DemoBootApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(DemoBootApplication.class, args);

	}
	
	@Configuration
	@EnableWebMvc
	public class WebConfig implements WebMvcConfigurer {

	    @Override
	    public void addResourceHandlers(ResourceHandlerRegistry registry) {
	        registry
	            .addResourceHandler("/resources/**")
	            .addResourceLocations("/resources/");
	    }
	}

	/*
	 * @Configuration
	 * 
	 * @EnableWebSecurity
	 * 
	 * @EnableAspectJAutoProxy
	 * 
	 * class WebSecurityConfig extends WebSecurityConfigurerAdapter {
	 * 
	 * @Override protected void configure(HttpSecurity http) throws Exception {
	 * http.csrf().disable() .addFilterAfter(new JWTAuthorizationFilter(),
	 * UsernamePasswordAuthenticationFilter.class)
	 * .authorizeRequests().antMatchers("/user").permitAll().antMatchers("/login").
	 * permitAll() .antMatchers("/").permitAll().anyRequest().authenticated(); }
	 * 
	 * }
	 */

}
