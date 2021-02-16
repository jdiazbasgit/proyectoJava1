package banco;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;


public class GestionarCuentasDao {

	/*
	 * public static void grabarCuentas(List<CuentaCorriente> cuentas) { try
	 * (ObjectOutputStream objectOutputStream = new ObjectOutputStream(new
	 * FileOutputStream("cuentas.banco"))){ objectOutputStream.writeObject(cuentas);
	 * objectOutputStream.flush();
	 * 
	 * 
	 * } catch (Exception e) { System.out.println(e.getMessage());
	 * e.printStackTrace(); } }
	 */
	
	/*
	 * @SuppressWarnings("unchecked") public static void
	 * leerCuentas(List<CuentaCorriente> cuentas) { try (ObjectInputStream
	 * objectInputStream = new ObjectInputStream (new
	 * FileInputStream("cuentas.banco"))){ // cuentas= (List<CuentaCorriente>)
	 * objectInputStream.readObject(); Cajero.setCuentas((List<CuentaCorriente>)
	 * objectInputStream.readObject()); System.out.println(Cajero.getCuentas()); }
	 * catch (Exception e) { e.printStackTrace();
	 * System.out.println("No existe ninguna cuenta"); } }
	 */
	
	public static Connection getConexion() {

		try {
			Properties properties= new Properties();
			properties.load(new FileInputStream("bd.properties"));
			return DriverManager.getConnection("jdbc:mysql://"+properties.getProperty("servidor")+":3306/banco", properties.getProperty("usuario"), properties.getProperty("clave"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}

	}

	public static void desconectar(Connection conexion) {
		try {
			conexion.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	public static int grabaCuentaBaseDatos(CuentaCorriente cuenta) {
		
		
		int salida=0;
		// CREAR CONEXION
		Connection conexion= GestionarCuentasDao.getConexion();
		
		// PreparedStatement o statement
		
		try {
			Statement statement= conexion.createStatement();
			salida=statement.executeUpdate("INSERT INTO CUENTAS (NOMBRE,SALDO,CREDITO) "
				+ "VALUES ('"+cuenta.getNombreDecuenta()+"',"+cuenta.getSaldo()+","+cuenta.getCredito()+") ");
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			
		}
		finally {
			desconectar(conexion);
		}
		

		return salida;
	}

	public static int modificarCuentaBaseDatos(CuentaCorriente cuenta) {
		int salida=0;
		Connection conexion=GestionarCuentasDao.getConexion();
		String sql="update cuentas set nombre=?, saldo=?, credito=? where id=?";
		try {
			PreparedStatement preparedStatement= conexion.prepareStatement(sql);
			preparedStatement.setString(1, cuenta.getNombreDecuenta());
			preparedStatement.setInt(2, cuenta.getSaldo());
			preparedStatement.setInt(3, cuenta.getCredito());
			preparedStatement.setInt(4, cuenta.getId());
			salida=preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return salida;
	}
	
	public static List<CuentaCorriente>  getCuentasBaseDatos() {
		
		List<CuentaCorriente> cuentas= new ArrayList<>();
		Connection conexion= GestionarCuentasDao.getConexion();
		
		try {
			PreparedStatement preparedStatement= conexion.prepareStatement("select id,nombre,credito,saldo from cuentas");
			ResultSet resultSet= preparedStatement.executeQuery();
			while(resultSet.next()) {
				CuentaCorriente cuenta=new CuentaCorriente(resultSet.getInt(1),resultSet.getString(2),
						resultSet.getInt(3), resultSet.getInt(4));
				cuentas.add(cuenta);
				
				/*
				 * PreparedStatement pst= conexion.
				 * prepareStatement("select id,fecha,concepto,importe from movimientos where cuenta_id=?"
				 * ); pst.setInt(1, cuenta.getId());
				 */
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			GestionarCuentasDao.desconectar(conexion);
		}		
		return cuentas;
	}
	
	public static int borrarCuenta(int idCuenta) {
		int salida=0;
		Connection conexion=GestionarCuentasDao.getConexion();
		String sql="delete from cuentas where id=?";
		try {
			PreparedStatement preparedStatement=conexion.prepareStatement(sql);
			preparedStatement.setInt(1, idCuenta);
			salida=preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return salida;
		
		
	}
	public static int borrarMovimiento(int idMovimiento) {
		int salida=0;
		Connection conexion=GestionarCuentasDao.getConexion();
		String sql="delete from movimientos where id=?";
		try {
			PreparedStatement preparedStatement=conexion.prepareStatement(sql);
			preparedStatement.setInt(1, idMovimiento);
			salida=preparedStatement.executeUpdate();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return salida;
		
		
	}
	
	public static List<MovimientoCuenta> getMovimientosDeCuentaBaseDatos(int cuentaId){
		List<MovimientoCuenta> movimientos= new ArrayList<>();
		Connection conexion= GestionarCuentasDao.getConexion();
		String sql="select id,fecha,concepto,importe,cuenta_id from movimientos where cuenta_id=?";
		try {
			PreparedStatement preparedStatement= conexion.prepareStatement(sql);
			preparedStatement.setInt(1, cuentaId);
			ResultSet resultSet=preparedStatement.executeQuery();
			while(resultSet.next()){
				MovimientoCuenta movimientoCuenta= new MovimientoCuenta(resultSet.getInt(1), resultSet.getDate(2), resultSet.getString(3), resultSet.getInt(4),resultSet.getInt(5));
				movimientos.add(movimientoCuenta);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally {
			GestionarCuentasDao.desconectar(conexion);
		}		
		
		return movimientos;
	}
	
	public static int grabaMovimientoBaseDatos(String concepto, int importe , int cuentaId) {
		
		int salida=0;
		Connection conexion= GestionarCuentasDao.getConexion();
		try {
			Statement statement= conexion.createStatement();
			salida=statement.executeUpdate("insert into movimientos "
					+ "(concepto, importe, cuenta_id) values ('"+concepto+"',"+importe+","+cuentaId+")");
			
			/*PreparedStatement pst= conexion.prepareStatement("insert into movimientos (concepto,"
					+ "importe,cuenta_id) values (?,?,?)");
			pst.setString(1, concepto);
			pst.setInt(2, importe);
			pst.setInt(3, cuentaId);
			salida=pst.executeUpdate();*/
			
			
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally {
			desconectar(conexion);
		}
		
		return salida;
	}

}
