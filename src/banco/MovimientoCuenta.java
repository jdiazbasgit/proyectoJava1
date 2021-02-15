package banco;

import java.io.Serializable;
import java.sql.Date;
import java.util.GregorianCalendar;

public class MovimientoCuenta implements Serializable {

	private int id;
	private String concepto;
	private Date fecha;
	private int importe;
	
	public MovimientoCuenta(int id,Date fecha, String concepto, int importe, int cuentaId) {
		
		this.id=id;
		this.setFecha(fecha);
		this.concepto = concepto;
		this.importe = importe;
	}
	
	public String getConcepto() {
		return concepto;
	}

	public void setConcepto(String concepto) {
		this.concepto = concepto;
	}


	public int getImporte() {
		return importe;
	}

	public void setImporte(int importe) {
		this.importe = importe;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Date getFecha() {
		return fecha;
	}

	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}
	
}
