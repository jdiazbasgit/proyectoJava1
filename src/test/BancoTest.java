package test;
 
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;

import java.sql.Connection;
import java.sql.Date;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.GregorianCalendar;
import java.util.Random;

import org.junit.Test;

import banco.Cajero;
import banco.CuentaCorriente;
import banco.GestionarCuentasDao;
import banco.MovimientoCuenta;
import banco.SinSaldoException;
import banco.TransferenciaHilo;

public class BancoTest {

	@Test
	public void crearCuentaTest() {
		CuentaCorriente cuenta = new CuentaCorriente(0, String.valueOf(new Random().nextInt() * 1000000000), 0, 0);
		assertNotNull(cuenta);
		int resultado = GestionarCuentasDao.grabaCuentaBaseDatos(cuenta);
		assertNotEquals(0, resultado);
		MovimientoCuenta movimientoCuenta = new MovimientoCuenta(0, new Date(new GregorianCalendar().getTimeInMillis()),
				"prueba", 0, buscarUltimaCuenta(cuenta.getNombreDecuenta()));
		assertNotNull(movimientoCuenta);
		int resultadoGrabar = GestionarCuentasDao.grabaMovimientoBaseDatos(movimientoCuenta.getConcepto(),
				movimientoCuenta.getImporte(), movimientoCuenta.getCuentaId());
		assertNotEquals(0, resultadoGrabar);
		int resultado1 = GestionarCuentasDao.borrarMovimiento(buscarUltimoMovimiento());
		assertEquals(1, resultado1);
		int resultado2 = GestionarCuentasDao.borrarCuenta(buscarUltimaCuenta(cuenta.getNombreDecuenta()));
		assertEquals(1, resultado2);
	}

	@Test
	public void coprobarCamposCuentaTest() {
		CuentaCorriente cuenta = new CuentaCorriente();
		assertNotNull(cuenta);
		cuenta.setId(1);
		assertEquals(1, cuenta.getId());
		cuenta.setNombreDecuenta("nombre");
		assertEquals("nombre", cuenta.getNombreDecuenta());
		cuenta.setSaldo(0);
		assertEquals(0, cuenta.getSaldo());
		cuenta.setCredito(0);
		assertEquals(0, cuenta.getCredito());
		cuenta.setMovimientos(new ArrayList<>());
		assertNotNull(cuenta.getMovimientos());

	}

	@Test
	public void profeTest() {

	}

	@Test
	public void miguelTestMovimientoCuenta() {
		Date d = new Date(1220227200);
		MovimientoCuenta movimiento = new MovimientoCuenta(7, d, "Ingreso", 0, 0);
		assertNotNull(movimiento);
		movimiento.setId(5);
		assertEquals(5, movimiento.getId());
		movimiento.setFecha(new Date(1220227200));
		assertEquals(d, movimiento.getFecha());
		movimiento.setConcepto("Movimiento Miguel");
		assertEquals("Movimiento Miguel", movimiento.getConcepto());
		movimiento.setImporte(3500);
		assertEquals(3500, movimiento.getImporte());
		movimiento.setCuentaId(3000);
		assertEquals(3000, movimiento.getCuentaId());
	}

	@Test
	public void miguelTestHilo1() {
		CuentaCorriente cuentaPruebasMiguelR2 = new CuentaCorriente(0, "Miguel", 0, 400000);
		TransferenciaHilo hilo = new TransferenciaHilo(30000, cuentaPruebasMiguelR2);
		assertNotNull(hilo);
	}

	@Test
	public void miguelSinSaldoExceptionTest() {
		SinSaldoException excepcion = new SinSaldoException();
		assertNotNull(excepcion);
		SinSaldoException excepcion2 = new SinSaldoException("Error sin saldo");
		assertEquals("Error sin saldo", excepcion2.getMessage());
	}
	
	@Test
	public void miguelListarCuentas() {
		assertNotNull(GestionarCuentasDao.getCuentasBaseDatos());
	}
	
	@Test
	public void miguelModificarCuenta() {
		CuentaCorriente cuenta = new CuentaCorriente(60, "Laura", 0, 35000);
		int salida = 0;
		assertEquals(salida, GestionarCuentasDao.modificarCuentaBaseDatos(cuenta));
	}
	
	@Test
	public void miguelListadoCuentas() {
		int cuentaId = 2;
		assertNotNull(GestionarCuentasDao.getMovimientosDeCuentaBaseDatos(cuentaId));
		assertEquals(6, GestionarCuentasDao.getMovimientosDeCuentaBaseDatos(cuentaId).size());
	}
	
	@Test
	public void miguelListadoCuentasVoid() {
		int cuentaIdNoExistente = 0;
		assertEquals(0, GestionarCuentasDao.getMovimientosDeCuentaBaseDatos(cuentaIdNoExistente).size());
	}

	public int buscarUltimaCuenta(String nombre) {
		int salida = 0;

		Connection conexion = GestionarCuentasDao.getConexion();
		String sql = "select id from cuentas where nombre='" + nombre + "'";
		try (Statement statement = conexion.createStatement(); ResultSet resultset = statement.executeQuery(sql);) {

			if (resultset.next())
				salida = resultset.getInt(1);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			GestionarCuentasDao.desconectar(conexion);
		}
		return salida;

	}

	public int buscarUltimoMovimiento() {
		int salida = 0;

		Connection conexion = GestionarCuentasDao.getConexion();
		String sql = "select id from movimientos order by id desc";
		try (Statement statement = conexion.createStatement(); ResultSet resultset = statement.executeQuery(sql);) {

			if (resultset.next())
				salida = resultset.getInt(1);
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			GestionarCuentasDao.desconectar(conexion);
		}
		return salida;

	}

}
