package curso.java.concierto.instrumentos;

import curso.java.concierto.excepciones.InstrumentoRotoException;

public interface InstrumentoInterface {
	public String sonar() throws InstrumentoRotoException;
}
