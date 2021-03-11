package curso.generation.demo;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class DemoController {
	
	
	

	

	@PostMapping("/")
	public String index() {
		
		return "index";
		
	}
	

	

}
