package curso.java.concierto.musicos;

import curso.java.concierto.excepciones.InstrumentoRotoException;

public interface MusicoInterface
{
	public void tocar() throws InstrumentoRotoException ;
	public void verConexion();
}
