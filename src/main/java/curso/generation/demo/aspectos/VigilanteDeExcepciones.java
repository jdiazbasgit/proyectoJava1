package curso.generation.demo.aspectos;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class VigilanteDeExcepciones {
	
	
	@Pointcut("execution(@curso.generation.demo.Vigilado * *.*(..))")
	public void vigilante() {

	}
	
	@Around("execution(@curso.generation.demo.Vigilado * *.*(..))")
	public Object comprobarExcepcion(ProceedingJoinPoint joinPoint) {
		Object salida=null;
		final Logger logger = LoggerFactory.getLogger(joinPoint.getTarget().getClass());
		try {
			salida=joinPoint.proceed();
		} catch (Throwable e) {
			logger.info(e.getMessage());
		}
		return salida;
		
	}

}
