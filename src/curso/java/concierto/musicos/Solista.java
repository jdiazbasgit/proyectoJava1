package curso.java.concierto.musicos;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import curso.java.concierto.anotaciones.Vigilado;
import curso.java.concierto.excepciones.InstrumentoRotoException;
import curso.java.concierto.instrumentos.Instrumento;

@Component
public class Solista extends Musico
{

	@Override
	@Vigilado
	public void tocar() throws InstrumentoRotoException 
	{
		System.out.println(getInstrumento().sonar());
		
	}
	
	@Override
	@Autowired
	@Qualifier("tambor")
	public void setInstrumento(Instrumento instrumento)
	{
		// TODO Auto-generated method stub
		super.setInstrumento(instrumento);
	}
	
	

}
