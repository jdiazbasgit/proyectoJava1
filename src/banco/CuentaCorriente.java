package banco;

import java.io.Serializable;
import java.util.List;

public class CuentaCorriente implements Serializable  {
	
	private int id;
	private int saldo;
	private int credito;
	private String nombreDecuenta;
	private List <MovimientoCuenta> movimientos;
	
	public CuentaCorriente(int id,String nombreDeCuenta, int credito, int saldo) {
		this.id=id;
		this.nombreDecuenta = nombreDeCuenta;
		this.credito = credito;
		this.saldo = saldo;
	}
	
	public CuentaCorriente() {
		
	}
	
	
	
	public int getSaldo() {
		return saldo;
	}

	public void setSaldo(int saldo) {
		this.saldo = saldo;
	}

	public int getCredito() {
		return credito;
	}

	public void setCredito(int credito) {
		this.credito = credito;
	}

	public String getNombreDecuenta() {
		return nombreDecuenta;
	}

	public void setNombreDecuenta(String nombreDecuenta) {
		this.nombreDecuenta = nombreDecuenta;
	}

	public List<MovimientoCuenta> getMovimientos() {
		return movimientos;
	}

	public void setMovimientos(List<MovimientoCuenta> movimientos) {
		this.movimientos = movimientos;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	
}
