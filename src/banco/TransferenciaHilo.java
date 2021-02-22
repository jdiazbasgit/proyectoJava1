package banco;

public class TransferenciaHilo extends Thread {

	public static final String TEXTO_TRANSFERENCIA = "Transferencia recibida";
	private int importe;
	private CuentaCorriente cuenta;
	private String ruta;
	
	public TransferenciaHilo(int importe,CuentaCorriente cuenta,String ruta) {
		
		this.importe = importe;
		this.cuenta=cuenta;
		this.ruta=ruta;
	}
	
	@Override
	public void run() {
		
		try {
			Thread.sleep(120000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		Cajero.getCuentaCorrienteDestino().setSaldo(Cajero.getCuentaCorrienteDestino().getSaldo() + importe);
		GestionarCuentasDao.grabaMovimientoBaseDatos("transferencia recibida", getImporte(), getCuenta().getId(),ruta);
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

	public String getRuta() {
		return ruta;
	}

	public void setRuta(String ruta) {
		this.ruta = ruta;
	}
}
