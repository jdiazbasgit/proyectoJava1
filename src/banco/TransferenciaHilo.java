package banco;

public class TransferenciaHilo extends Thread {

	public static final String TEXTO_TRANSFERENCIA = "Transferencia recibida";
	private int importe;
	
	public TransferenciaHilo(int importe) {
		
		this.importe = importe;
	}
	
	@Override
	public void run() {
		
		try {
			Thread.sleep(120000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		Cajero.getCuentaCorrienteDestino().setSaldo(Cajero.getCuentaCorrienteDestino().getSaldo() + importe);
		Cajero.grabaMovimiento(getImporte(), TransferenciaHilo.TEXTO_TRANSFERENCIA, Cajero.getCuentaCorrienteDestino());
		GestionarCuentas.grabarCuentas(Cajero.getCuentas());
	}

	public int getImporte() {
		return importe;
	}

	public void setImporte(int importe) {
		this.importe = importe;
	}
}
