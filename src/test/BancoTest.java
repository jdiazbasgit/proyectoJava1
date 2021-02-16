package test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertNotNull;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.GregorianCalendar;

import org.junit.Test;

import banco.CuentaCorriente;
import banco.GestionarCuentasDao;
import banco.MovimientoCuenta;

public class BancoTest {
	
	
	@Test //Annotations
	public void crearCuentaTest() {
		//creamos cuenta
		CuentaCorriente cuenta= new CuentaCorriente(0,String.valueOf((int)(Math.random()*1000000000)),0,0);
		assertNotNull(cuenta);
		//grabamos cuenta en base de datos
		int resultado= GestionarCuentasDao.grabaCuentaBaseDatos(cuenta);
		assertNotEquals(0, resultado);
		//creamos movimiento
		MovimientoCuenta movimientoCuenta= new MovimientoCuenta(0, new Date(new GregorianCalendar().getTimeInMillis()), "prueba", 0, buscarUltimaCuenta(cuenta.getNombreDecuenta()));
		assertNotNull(movimientoCuenta);
		//grabamos movimiento en base de datos
		int resultadoGrabar=GestionarCuentasDao.grabaMovimientoBaseDatos(movimientoCuenta.getConcepto(),
				movimientoCuenta.getImporte(), movimientoCuenta.getCuentaId());
		assertNotEquals(0, resultadoGrabar);
		//borramos movimiento de base de datos
		int resultado1=GestionarCuentasDao.borrarMovimiento(buscarUltimoMovimiento());
		assertEquals(1, resultado1);
		//borramos cuenta de bae de datos
		int resultado2=GestionarCuentasDao.borrarCuenta(buscarUltimaCuenta(cuenta.getNombreDecuenta()));
		assertEquals(1, resultado2);
	}
	@Test
	public void coprobarCamposCuentaTest() {
		CuentaCorriente cuenta= new CuentaCorriente();
		assertNotNull(cuenta);
		cuenta.setId(1);
		assertEquals(1, cuenta.getId());
		cuenta.setNombreDecuenta("nombre");
		assertEquals("nombre", cuenta.getNombreDecuenta());
		cuenta.setSaldo(0);
		assertEquals(0, cuenta.getSaldo());
		cuenta.setCredito(0);
		assertEquals(0 ,cuenta.getCredito());
		cuenta.setMovimientos(new ArrayList<>());
		assertNotNull(cuenta.getMovimientos());
		
	}
	
	

	public int buscarUltimaCuenta(String nombre) {
		int salida=0;
		
		Connection conexion=GestionarCuentasDao.getConexion();
		String sql="select id from cuentas where nombre='"+nombre+"'";
		try {
			Statement statement= conexion.createStatement();
			ResultSet resultset=statement.executeQuery(sql);
			if(resultset.next())
				salida=resultset.getInt(1);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally {
			GestionarCuentasDao.desconectar(conexion);
		}
		return salida;
		
	}
	
	public int buscarUltimoMovimiento() {
		int salida=0;
		
		Connection conexion=GestionarCuentasDao.getConexion();
		String sql="select id from movimientos order by id desc";
		try {
			Statement statement= conexion.createStatement();
			ResultSet resultset=statement.executeQuery(sql);
			if(resultset.next())
				salida=resultset.getInt(1);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			GestionarCuentasDao.desconectar(conexion);
		}
		return salida;
		
	}
	

}
