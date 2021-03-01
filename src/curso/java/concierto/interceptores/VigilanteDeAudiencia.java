package curso.java.concierto.interceptores;

import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
//@Aspect
public class VigilanteDeAudiencia {
		
	             
	@Pointcut("execution(@curso.java.concierto.anotaciones.Vigilado *  *.*(..))")
	public void soporte() {
		
	}
	
	
	
	@Before("soporte()")
	public void apagarMoviles() {
		
		System.out.println("Señores va a empezar el concierto, apaguen los móviles");
	}
	
	
	@AfterReturning("soporte()")
	public void encenderMoviles() {
		System.out.println("Señores ya ha terminado el concierto pueden encender los móviles");
	}

}





