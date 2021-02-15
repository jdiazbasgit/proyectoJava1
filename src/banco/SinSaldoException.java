package banco;

@SuppressWarnings("serial")
public class SinSaldoException extends Exception {

	public SinSaldoException() {
		super();
		
	}

	public SinSaldoException(String message) {
		super(message);
		
	}

}
