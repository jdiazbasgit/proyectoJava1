package banco;

import java.io.Serializable;
import java.util.GregorianCalendar;

public class MovimientoCuenta implements Serializable {

	private String concepto;
	private GregorianCalendar fecha;
	private int importe;
	
	public MovimientoCuenta(GregorianCalendar fecha, String concepto, int importe) {
		
		this.fecha = fecha;
		this.concepto = concepto;
		this.importe = importe;
	}
	
	public String getConcepto() {
		return concepto;
	}

	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}

	public GregorianCalendar getFecha() {
		return fecha;
	}

	public void setFecha(GregorianCalendar fecha) {
		this.fecha = fecha;
	}

	public int getImporte() {
		return importe;
	}

	public void setImporte(int importe) {
		this.importe = importe;
	}
	
}
