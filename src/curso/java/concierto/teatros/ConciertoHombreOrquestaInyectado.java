package curso.java.concierto.teatros;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import curso.java.concierto.excepciones.InstrumentoRotoException;
import curso.java.concierto.musicos.MusicoInterface;

public class ConciertoHombreOrquestaInyectado
{

	public static void main(String[] args)
	{
		ApplicationContext ctx= new ClassPathXmlApplicationContext("spring.xml");	
		MusicoInterface hombreOrquesta= (MusicoInterface) ctx.getBean("hombreOrquesta");
		
			try {
				hombreOrquesta.tocar();
				hombreOrquesta.verConexion();
			} catch (InstrumentoRotoException e) {
				System.out.println("Señores se ha roto el instrumento vayan a la taquilla a por su dinero");
			}
		
	}

}
