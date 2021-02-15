package banco;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.GregorianCalendar;
import java.util.List;

public class CuentaCorriente implements Serializable  {
	
	//definimos las propiedades
	
	private int saldo;
	private int credito;
	private String nombreDecuenta;
	private List <MovimientoCuenta> movimientos;
	
	//Constructores
	public CuentaCorriente(String nombreDeCuenta, int credito, int saldo) {
		this.nombreDecuenta = nombreDeCuenta;
		this.credito = credito;
		this.saldo = saldo;
	}
	
	public CuentaCorriente() {
		
	}
	
	//metodos de negocio
	
	public void ingresarDinero(int dinero) {
		this.setSaldo(this.getSaldo() + dinero);
		imprimirSaldo();
		ponerMovimiento("Ingreso", dinero);
		
	}
	
	public void ponerMovimiento(String concepto, int importe) {
		if (getMovimientos() == null);
			setMovimientos(new ArrayList<>());
		getMovimientos().add(new MovimientoCuenta(new GregorianCalendar(), concepto, importe));
	}
	
	public void retirarDinero(int dinero) throws SinSaldoException {
		if (dinero <= getSaldo() + getCredito()) {
		this.setSaldo(this.getSaldo() - dinero);
		imprimirSaldo();
		}
		else {
			throw new SinSaldoException("No hay saldo en tu cuenta");
			
			//System.err.println("No hay suficiente saldo");
		}
	}
	
	public void imprimirSaldo() {
		if (getSaldo() >= 0) {
		System.out.println(getNombreDecuenta() + ":" + getSaldo());
		}
		else {
			System.err.println(getNombreDecuenta() + ":" + getSaldo());
		}
	}
	
	public void transferencia(int dinero, CuentaCorriente cuentaDestino) throws SinSaldoException {
		this.retirarDinero(dinero);
		//temporizador
		cuentaDestino.ingresarDinero(dinero);
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

	
}
