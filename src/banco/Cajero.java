package banco;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.InputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import com.mysql.jdbc.Driver;

import utilidades.Utilidades;

public class Cajero {// esto es una prueba de git

	public static final String NO_CUENTA = "No hay ninguna cuenta seleccionada como activa";
	private static List<CuentaCorriente> cuentas;
	private static CuentaCorriente cuentaCorrienteActiva;
	public static CuentaCorriente cuentaCorrienteDestino;
	private static ObjectInputStream input;

	public static void main(String[] args) {

		// CuentaCorriente cuentaOrigen = new CuentaCorriente("Cuenta1", 0, 0);
		// CuentaCorriente cuentaDestino = new CuentaCorriente("Cuenta2", 0, 0);
		// CuentaCorriente cuentaDestino2 = new CuentaCorriente("Cuenta3", 0, 0);

		// cuentaOrigen.setNombreDecuenta("Cuenta1");
		// cuentaDestino.setNombreDecuenta("Cuenta2");
		// cuentaDestino2.setNombreDecuenta("Cuenta3");

		/*
		 * cuentaOrigen.setCredito(5000); cuentaOrigen.ingresarDinero(1000000);
		 * cuentaOrigen.ingresarDinero(325000); cuentaDestino.ingresarDinero(100000);
		 * try { cuentaOrigen.transferencia(1000000, cuentaDestino); } catch
		 * (SinSaldoException e) { System.err.println(e.getMessage()); } try {
		 * cuentaDestino.transferencia(200000, cuentaDestino2); } catch
		 * (SinSaldoException e) { System.err.println(e.getMessage()); }
		 */

		// ----------GESTION DE BBDD---------
		// 1.- REGISTRAR DRIVER
		// opcion 1 registrar directamente de la clase

		try {
			DriverManager.registerDriver(new Driver());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// opcion 2 registrar cpom String

		/*
		 * try { Class.forName("com.mysql.jdbc.Driver"); } catch (ClassNotFoundException
		 * e) { // TODO Auto-generated catch block e.printStackTrace(); }
		 */

		// GestionarCuentas.leerCuentas(getCuentas());
		cargacuentas();
		while (true) {
			Cajero.pintarMenu();
			String opcion = Utilidades.getTeclado(1);
			switch (opcion) {
			case "1":
				crearCuenta();
				System.out.println("Has seleccionado crear una cuenta");
				break;
			case "2":
				seleccionarCuenta("Seleccionar cuenta para operar", 0);

				break;
			case "3":
				System.out.println("ingresar");
				ingresar();
				break;
			case "4":
				System.out.println("Has seleccionado sacar dinero");
				sacar();
				break;
			case "5":
				System.out.println("Has seleccionado transferencia");
				transferencia();
				break;
			case "6":
				System.out.println("Has seleccionado ver movimientos");
				movimientos();
				break;
			case "7":
				System.out.println("Has seleccionado crédito");
				break;
			case "0":
				System.exit(0);
				break;
			default:
				System.out.println("No es una opción correcta");
			}
		}

	}

	public static void cargacuentas() {
		if(Cajero.cuentas!=null)
		Cajero.cuentas.clear();
		Cajero.cuentas = GestionarCuentas.getCuentasBaseDatos();
		for (CuentaCorriente cuenta : Cajero.getCuentas()) {
			cuenta.setMovimientos(GestionarCuentas.getMovimientosDeCuentaBaseDatos(cuenta.getId()));
			for (MovimientoCuenta movimiento : cuenta.getMovimientos()) {
				cuenta.setSaldo(cuenta.getSaldo()+movimiento.getImporte());
			}
			
		}
	}

	private static void seleccionarCuenta(String texto, int tipo) {
		Cajero.listarCuentas();
		System.out.println(texto);
		String nombre = Utilidades.getTeclado(1);

		if (tipo == 0)
			Cajero.cuentaCorrienteActiva = buscarCuenta(nombre);
		else
			Cajero.cuentaCorrienteDestino = buscarCuenta(nombre);

		if (Cajero.cuentaCorrienteActiva == null && tipo==0) {
			System.out.println("Cuenta corriente seleccionada no existe");
			return;
		}
		if (Cajero.cuentaCorrienteDestino == null && tipo==1) {
			System.out.println("Cuenta corriente seleccionada no existe");
			return;
		}

		System.out.println("Saldo actual: " + Cajero.cuentaCorrienteActiva.getSaldo());

	}

	public static CuentaCorriente buscarCuenta(String nombre) {
		CuentaCorriente salida = null;
		for (CuentaCorriente cuentaCorriente : cuentas) {
			if (cuentaCorriente.getNombreDecuenta().equals(nombre)) {
				salida = cuentaCorriente;
			}
		}

		return salida;
	}

	public static void listarCuentas() {
		if (Cajero.getCuentas() == null)
			Cajero.setCuentas(new ArrayList<>());
		if (Cajero.getCuentaCorrienteActiva() == null)
			Cajero.setCuentaCorrienteActiva(new CuentaCorriente());
		for (CuentaCorriente cuenta : getCuentas()) {
			if (cuenta.getNombreDecuenta().equals(Cajero.getCuentaCorrienteActiva().getNombreDecuenta())) {
				System.err.println(cuenta.getNombreDecuenta());
			} else {
				System.out.println(cuenta.getNombreDecuenta());
			}
		}
	}

	private static void crearCuenta() {
		if (Cajero.getCuentas() == null)
			Cajero.setCuentas(new ArrayList<CuentaCorriente>());
		System.out.println("Escribe nombre de cuenta:");

		String nombre = Utilidades.getTeclado(1);
		CuentaCorriente cuenta = buscarCuenta(nombre);
		if (cuenta != null) {
			System.out.println("Esta cuenta ya existe");
			return;
		}

		CuentaCorriente cuentaCorriente = new CuentaCorriente(0, nombre, 0, 0);
		Cajero.getCuentas().add(cuentaCorriente);
		for (CuentaCorriente cuenta1 : getCuentas()) {
			System.out.println(cuenta1.getNombreDecuenta());
		}
		int resultado = GestionarCuentas.grabaCuentaBaseDatos(cuentaCorriente);
		if (resultado == 1)
			System.out.println("Cuenta creada");
		else
			System.err.println("Cuenta no creada");
		cargacuentas();
		pintarMenu();

	}

	public static void ingresar() {
		if (Cajero.getCuentaCorrienteActiva() == null) {
			System.out.println(NO_CUENTA);
			return;
		}
		System.out.println("Escribe la cantidad a ingresar");
		String importe = Utilidades.getTeclado(0);
		int importeNumero = Integer.parseInt(importe);

		Cajero.cuentaCorrienteActiva.setSaldo(Cajero.cuentaCorrienteActiva.getSaldo() + importeNumero);
		System.out.println("Saldo actual: " + Cajero.cuentaCorrienteActiva.getSaldo());
		GestionarCuentas.grabaMovimientoBaseDatos("ingreso", importeNumero, Cajero.cuentaCorrienteActiva.getId());
		cargacuentas();
	}

	public static void grabaMovimiento(int importe, String concepto, CuentaCorriente cuenta) {

		
		/*
		 * MovimientoCuenta movimientoCuenta = new MovimientoCuenta(new
		 * GregorianCalendar(), concepto, importe); if (cuenta == null) {
		 * System.out.println(NO_CUENTA); return; } if (cuenta.getMovimientos() == null)
		 * cuenta.setMovimientos(new ArrayList<>());
		 * cuenta.getMovimientos().add(movimientoCuenta);
		 * GestionarCuentas.grabarCuentas(Cajero.getCuentas());
		 * GestionarCuentas.grabaMovimientoBaseDatos(concepto, importe, 16);
		 */
		 
	}

	public static void sacar() {
		System.out.println("Escribe la cantidad a sacar");
		String importe = Utilidades.getTeclado(0);
		int importeNumero = Integer.parseInt(importe);

		Cajero.cuentaCorrienteActiva.setSaldo(Cajero.cuentaCorrienteActiva.getSaldo() - importeNumero);
		System.out.println("Saldo actual: " + Cajero.cuentaCorrienteActiva.getSaldo());

		grabaMovimiento(importeNumero, "reintegro", cuentaCorrienteActiva);
		GestionarCuentas.grabaMovimientoBaseDatos("reintegro", importeNumero*-1, Cajero.cuentaCorrienteActiva.getId());
		cargacuentas();
	}

	public static void transferencia() {
		seleccionarCuenta("Selecciona cuenta destino", 1);
		// String nombre = Utilidades.getTeclado(1);
		// Cajero.cuentaCorrienteDestino = buscarCuenta(nombre);
		System.out.println("Escribe el importe:");
		String importe = Utilidades.getTeclado(0);
		int importeTransferencia = Integer.parseInt(importe);
		Cajero.cuentaCorrienteActiva.setSaldo(Cajero.cuentaCorrienteActiva.getSaldo() - importeTransferencia);
		System.out.println("Tu saldo actual es de: " + Cajero.cuentaCorrienteActiva.getSaldo());
		
		GestionarCuentas.grabaMovimientoBaseDatos("transferencia realizada", importeTransferencia*-1,
				Cajero.cuentaCorrienteActiva.getId());
		cargacuentas();
		TransferenciaHilo hilo = new TransferenciaHilo(importeTransferencia, Cajero.cuentaCorrienteDestino);
		hilo.start();
	}

	public static void movimientos() {
		if (Cajero.cuentaCorrienteActiva == null) {
			System.out.println("No hay cuenta seleccionada");
			return;
		}

		for (MovimientoCuenta movimiento : Cajero.cuentaCorrienteActiva.getMovimientos()) {
			System.out.println(new SimpleDateFormat("dd/MM/YY").format(movimiento.getFecha()) + " - "
					+ movimiento.getConcepto() + " - " + movimiento.getImporte());
		}

	}

	/*
	 * public static void grabarCuentas() { try (ObjectOutputStream
	 * objectOutputStream = new ObjectOutputStream(new
	 * FileOutputStream("cuentas.banco"))) {
	 * objectOutputStream.writeObject(getCuentas()); objectOutputStream.flush();
	 * 
	 * } catch (Exception e) { System.out.println(e.getMessage());
	 * e.printStackTrace(); } }
	 */

	@SuppressWarnings("unchecked")
	public static void leerCuentas() {
		try (ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream("cuentas.banco"))) {
			setCuentas((List<CuentaCorriente>) input.readObject());

		} catch (Exception e) {
			System.out.println("No existe ninguna cuenta");
		}
	}

	public static void pintarMenu() {
		System.out.println("MENÚ DE OPCIONES");
		System.out.println("============");
		System.out.println("");
		System.out.println("1.- Crear cuenta");
		System.out.println("2.- Seleccionar cuenta activa");
		System.out.println("3.- Ingresar");
		System.out.println("4.- Sacar");
		System.out.println("5.- Transferencias");
		System.out.println("6.- Ver movimientos");
		System.out.println("7.- Crédito");
		System.out.println("");
		System.out.println("0.- Salir");
	}

	public static List<CuentaCorriente> getCuentas() {
		return cuentas;
	}

	public static void setCuentas(List<CuentaCorriente> cuentas) {
		Cajero.cuentas = cuentas;
	}

	public static CuentaCorriente getCuentaCorrienteActiva() {
		return cuentaCorrienteActiva;
	}

	public static void setCuentaCorrienteActiva(CuentaCorriente cuentaCorrienteActiva) {
		Cajero.cuentaCorrienteActiva = cuentaCorrienteActiva;
	}

	public static CuentaCorriente getCuentaCorrienteDestino() {
		return cuentaCorrienteDestino;
	}

	public static void setCuentaCorrienteDestino(CuentaCorriente cuentaCorrienteDestino) {
		Cajero.cuentaCorrienteDestino = cuentaCorrienteDestino;
	}

}
