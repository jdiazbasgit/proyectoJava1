package curso.java.concierto.musicos;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import curso.java.concierto.anotaciones.Conectar;
import curso.java.concierto.anotaciones.Vigilado;
import curso.java.concierto.excepciones.InstrumentoRotoException;
import curso.java.concierto.instrumentos.Instrumento;

@Component
public class HombreOrquesta extends Musico
{

	@Override
	@Vigilado
	@Conectar
	public void tocar() throws InstrumentoRotoException {
		for (Instrumento instrumento : getInstrumentos())
		{
			System.out.println(instrumento.sonar());
		}

	}
	
	@Override
	@Autowired
	@Qualifier("tocameaMi")
	
	public void setInstrumentos(Set<Instrumento> instrumentos)
	{
		// TODO Auto-generated method stub
		super.setInstrumentos(instrumentos);
	}

}
