
package banco;

import java.sql.DriverManager;
import java.sql.SQLException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import com.mysql.jdbc.Driver;

import utilidades.Utilidades;

public class Cajero {// esto es una prueba de git

	public static final String NO_CUENTA = "No hay ninguna cuenta seleccionada como activa";
	public static final String SALDO_ACTUAL = "Saldo Actual";

	private static List<CuentaCorriente> cuentas;
	private static CuentaCorriente cuentaCorrienteActiva;
	public static CuentaCorriente cuentaCorrienteDestino;
	private static Logger logger= Logger.getLogger("banco.Cajero");
	public static void main(String[] args) {

		

		try {
			DriverManager.registerDriver(new Driver());
		} catch (SQLException e) {
			e.printStackTrace();
		}

		
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
		if (Cajero.cuentas != null)
			Cajero.cuentas.clear();
		Cajero.cuentas = GestionarCuentasDao.getCuentasBaseDatos();
		for (CuentaCorriente cuenta : Cajero.getCuentas()) {
			cuenta.setMovimientos(GestionarCuentasDao.getMovimientosDeCuentaBaseDatos(cuenta.getId()));
			for (MovimientoCuenta movimiento : cuenta.getMovimientos()) {
				cuenta.setSaldo(cuenta.getSaldo() + movimiento.getImporte());
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

		if ((Cajero.cuentaCorrienteActiva == null && tipo == 0
				|| (Cajero.cuentaCorrienteDestino == null && tipo == 1))) {
			System.out.println("Cuenta corriente seleccionada no existe");
			return;
		}

		System.out.println(Cajero.SALDO_ACTUAL + Cajero.cuentaCorrienteActiva.getSaldo());

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
			Cajero.setCuentas(new ArrayList<>());
		logger.info("Escribe nombre de cuenta:");

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
		int resultado = GestionarCuentasDao.grabaCuentaBaseDatos(cuentaCorriente);
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
		GestionarCuentasDao.grabaMovimientoBaseDatos("ingreso", importeNumero, Cajero.cuentaCorrienteActiva.getId());
		cargacuentas();
	}

	

	public static void sacar() {
		System.out.println("Escribe la cantidad a sacar");
		String importe = Utilidades.getTeclado(0);
		int importeNumero = Integer.parseInt(importe);

		Cajero.cuentaCorrienteActiva.setSaldo(Cajero.cuentaCorrienteActiva.getSaldo() - importeNumero);
		System.out.println("Saldo actual: " + Cajero.cuentaCorrienteActiva.getSaldo());

		GestionarCuentasDao.grabaMovimientoBaseDatos("reintegro", importeNumero * -1,
				Cajero.cuentaCorrienteActiva.getId());
		cargacuentas();
	}

	public static void transferencia() {
		seleccionarCuenta("Selecciona cuenta destino", 1);
		System.out.println("Escribe el importe:");
		String importe = Utilidades.getTeclado(0);
		int importeTransferencia = Integer.parseInt(importe);
		Cajero.cuentaCorrienteActiva.setSaldo(Cajero.cuentaCorrienteActiva.getSaldo() - importeTransferencia);
		System.out.println("Tu saldo actual es de: " + Cajero.cuentaCorrienteActiva.getSaldo());

		GestionarCuentasDao.grabaMovimientoBaseDatos("transferencia realizada", importeTransferencia * -1,
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
		System.err.println(Cajero.getCuentaCorrienteActiva().getMovimientos().size());
		for (MovimientoCuenta movimiento : Cajero.cuentaCorrienteActiva.getMovimientos()) {
			System.out.println(new SimpleDateFormat("dd/MM/yy").format(movimiento.getFecha()) + " - "
					+ movimiento.getConcepto() + " - " + movimiento.getImporte());
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
