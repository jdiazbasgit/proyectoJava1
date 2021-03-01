package curso.java.concierto.interceptores;

import org.aopalliance.intercept.Joinpoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import curso.java.concierto.excepciones.InstrumentoRotoException;
import curso.java.concierto.instrumentos.Instrumento;
import curso.java.concierto.musicos.Musico;
import curso.java.concierto.musicos.Solista;

@Component
@Aspect
public class PropietarioDelTeatro {

	@Pointcut("execution(@curso.java.concierto.anotaciones.Vigilado *  *.*(..))")
	public void soporte() {

	}

	@Pointcut("execution(@curso.java.concierto.anotaciones.Conectar *  *.*(..))")
	public void soporteConexion() {

	}

	@Around("soporteConexion()")
	public void inyectarConexion(ProceedingJoinPoint joinPoint) {
		

	}

	@Around("soporte()")
	public Object trabajar(ProceedingJoinPoint joinpoint) throws InstrumentoRotoException {

		Musico musico = (Musico) joinpoint.getTarget();

		Object salida = null;
		// Before
		try {
			apagarMoviles();
			// fin de before

			salida = joinpoint.proceed();

			// AfterReturning
			apagarMoviles();
			// fin de AfterReturning

		} catch (Throwable e) {
			// AfterThrowing
			System.out.println("señores se ha roto un instrumento, voy a arreglarlo");
			if (musico.getClass().isInstance(new Solista())) {
				// Solista
				musico.getInstrumento().setSonido("sonido arreglado");

			} else {
				for (Instrumento instrumento : musico.getInstrumentos()) {

					if (instrumento.getSonido().equals("nada"))
						instrumento.setSonido("sonido arreglado");
				}

			}
			System.out.println("ya esta arreglado procedemos a continuar, disfruten del concierto");
			musico.tocar();
			encenderMoviles();
			// fin de after throwing
		} finally {
			// After
			// encenderMoviles();

			// fin de After
		}

		return salida;

	}

	public void apagarMoviles() {

		System.out.println("Señores va a empezar el concierto, apaguen los móviles");
	}

	public void encenderMoviles() {
		System.out.println("Señores ya ha terminado el concierto pueden encender los móviles");
	}
}
