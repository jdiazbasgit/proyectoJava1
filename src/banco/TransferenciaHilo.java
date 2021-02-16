package banco;

public class TransferenciaHilo extends Thread {

	public static final String TEXTO_TRANSFERENCIA = "Transferencia recibida";
	private int importe;
	private CuentaCorriente cuenta;
	
	public TransferenciaHilo(int importe,CuentaCorriente cuenta) {
		
		this.importe = importe;
		this.cuenta=cuenta;
	}
	
	@Override
	public void run() {
		
		try {
			Thread.sleep(120000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		Cajero.getCuentaCorrienteDestino().setSaldo(Cajero.getCuentaCorrienteDestino().getSaldo() + importe);
		GestionarCuentasDao.grabaMovimientoBaseDatos("transferencia recibida", getImporte(), getCuenta().getId());
		Cajero.cargacuentas();
	}

	public int getImporte() {
		return importe;
	}

	public void setImporte(int importe) {
		this.importe = importe;
	}

	public CuentaCorriente getCuenta() {
		return cuenta;
	}

	public void setCuenta(CuentaCorriente cuenta) {
		this.cuenta = cuenta;
	}
}
