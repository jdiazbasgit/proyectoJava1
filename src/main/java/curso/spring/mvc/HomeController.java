package curso.spring.mvc;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import curso.spring.mvc.beans.Login;

/**
 * Handles requests for the application home page.
 */
@Controller
//@Component
public class HomeController {
	
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	@RequestMapping(value = "/")
	public String home(Model model) {
		
		
		String nombre = "Javier";
		
		model.addAttribute("nombre", nombre );
		
		return "home";
	}
	
	@RequestMapping(value = "/uno")
	public String uno(@RequestParam(required = false) String texto , Model model) {
		
		
		String salida="has escrito "+texto.toUpperCase()+" y tiene "+texto.length()+ " letras";
		model.addAttribute("mensaje", salida);
		
		return "uno";
	}
	
	@RequestMapping(value = "/dos/{texto}")
	public String dos(@PathVariable("texto") String  texto, Model model) {
		
		
		String salida="has escrito "+texto.toUpperCase()+" y tiene "+texto.length()+ " letras en la dos";
		model.addAttribute("mensajeEnDos", salida);
		
		return "dos";
	}
	
	@RequestMapping("/formulario")
	public String formulario() {

		return "formulario";
	}
	
	@RequestMapping("/verFormulario")
	public String verFormulario(@RequestParam String usuario,@RequestParam String clave, Model model) {

		Login login= new Login();
		login.setUsuario(usuario);
		login.setClave(clave);
		
		model.addAttribute("mensaje", "has escrito como nombre "+usuario+" y como clave "+clave);
		return "verFormulario";
	}
	
	
	@RequestMapping("/formularioBean")
	public String formularioBean(Model model) {
		Login login= new Login();
		login.setUsuario("federico");
		model.addAttribute("login", login);
		return "formularioBean";
	}
	
	
	@RequestMapping("/verFormularioBean")
	public ModelAndView verFormularioBean(Login login) {
		
		ModelAndView modelAndView= new ModelAndView();
		modelAndView.setViewName("verFormulario");
		
		String salida="has escrito como nombre "+login.getUsuario()+" y como clave "+login.getClave()+" en formularioBean";
		
		modelAndView.addObject("mensaje",salida);
		
		return modelAndView;
		
		
	}
	
	
}
