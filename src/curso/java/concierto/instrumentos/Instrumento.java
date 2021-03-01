package curso.java.concierto.instrumentos;

import curso.java.concierto.excepciones.InstrumentoRotoException;

/**
 * 
 * @author javierdiaz
 * @version 1.0
 * @since 1.8 Esta clase crea un objeto de tipo instrumento para tocarlo en un
 *        concierto
 */
public class Instrumento implements InstrumentoInterface, Comparable<Instrumento> {

	private String sonido;

	/**
	 * Constructor que crea un instrumento con el sonido asignado
	 * 
	 * @param sonido es el sonido que vamos a asignar
	 */
	public Instrumento(String sonido) {
		this.sonido = sonido;
	}

	/**
	 * construye un objeto instrumento sin sonido asignado
	 */
	public Instrumento() {

	}

	/**
	 * método que reproduce el sonido del instrumento
	 * 
	 * @throws InstrumentoRotoException
	 */
	@Override
	public String sonar() throws InstrumentoRotoException {
		if (getSonido().equals("nada"))
			throw new InstrumentoRotoException();
		return getSonido();
	}

	@Override
	public boolean equals(Object obj) {
		Instrumento otro = (Instrumento) obj;
		return this.getSonido().equals(otro.getSonido());
	}

	@Override
	public int hashCode() {
		// TODO Auto-generated method stub
		return getSonido().hashCode() + 1;
	}

	/**
	 * devuelve el sonido del instrumento
	 * 
	 * @return el sonido
	 */
	public String getSonido() {
		return sonido;
	}

	/**
	 * establecemos el sonido del instrumento
	 * 
	 * @param sonido el sonido a asignar
	 */
	public void setSonido(String sonido) {
		this.sonido = sonido;
	}

	@Override
	public int compareTo(Instrumento otro) {
		// TODO Auto-generated method stub
		return this.getSonido().compareTo(otro.getSonido());
	}

}
