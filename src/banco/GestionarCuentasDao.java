package banco;

import java.io.FileInputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

public class GestionarCuentasDao {

	private GestionarCuentasDao() {

	}

	public static Connection getConexion() {

		try(FileInputStream fileInputStream=new FileInputStream("bd.properties")) {
			Properties properties = new Properties();
			properties.load(fileInputStream);
			return DriverManager.getConnection("jdbc:mysql://" + properties.getProperty("servidor") + ":3306/banco",
					properties.getProperty("usuario"), properties.getProperty("clave"));
		} catch (Exception e) {
			e.printStackTrace();
			return null;
		}

	}

	public static void desconectar(Connection conexion) {
		try {
			conexion.close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public static int grabaCuentaBaseDatos(CuentaCorriente cuenta) {

		int salida = 0;
		Connection conexion = GestionarCuentasDao.getConexion();
		if (conexion != null)
			try (Statement statement = conexion.createStatement();) {
				salida = statement.executeUpdate("INSERT INTO CUENTAS (NOMBRE,SALDO,CREDITO) " + "VALUES ('"
						+ cuenta.getNombreDecuenta() + "'," + cuenta.getSaldo() + "," + cuenta.getCredito() + ") ");

			} catch (Exception e) {
				e.printStackTrace();

			} finally {
				desconectar(conexion);
			}

		return salida;
	}

	public static int modificarCuentaBaseDatos(CuentaCorriente cuenta) {
		int salida = 0;

		String sql = "update cuentas set nombre=?, saldo=?, credito=? where id=?";
		Connection conexion = GestionarCuentasDao.getConexion();
		if (conexion != null)
			try (PreparedStatement preparedStatement = conexion.prepareStatement(sql);) {

				preparedStatement.setString(1, cuenta.getNombreDecuenta());
				preparedStatement.setInt(2, cuenta.getSaldo());
				preparedStatement.setInt(3, cuenta.getCredito());
				preparedStatement.setInt(4, cuenta.getId());
				salida = preparedStatement.executeUpdate();
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				GestionarCuentasDao.desconectar(conexion);
			}
		return salida;
	}

	public static List<CuentaCorriente> getCuentasBaseDatos() {

		List<CuentaCorriente> cuentas = new ArrayList<>();
		Connection conexion = GestionarCuentasDao.getConexion();
		if (conexion != null)
			try (PreparedStatement preparedStatement = conexion
					.prepareStatement("select id,nombre,credito,saldo from cuentas");
					ResultSet resultSet = preparedStatement.executeQuery();) {
				while (resultSet.next()) {
					CuentaCorriente cuenta = new CuentaCorriente(resultSet.getInt(1), resultSet.getString(2),
							resultSet.getInt(3), resultSet.getInt(4));
					cuentas.add(cuenta);

				}
			} catch (Exception e) {
				e.printStackTrace();
			} finally {
				GestionarCuentasDao.desconectar(conexion);
			}
		return cuentas;
	}

	public static int borrarCuenta(int idCuenta) {
		int salida = 0;
		Connection conexion = GestionarCuentasDao.getConexion();
		String sql = "delete from cuentas where id=?";
		if (conexion != null)
			try (PreparedStatement preparedStatement = conexion.prepareStatement(sql);) {

				preparedStatement.setInt(1, idCuenta);
				salida = preparedStatement.executeUpdate();
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				GestionarCuentasDao.desconectar(conexion);
			}

		return salida;

	}

	public static int borrarMovimiento(int idMovimiento) {
		int salida = 0;

		String sql = "delete from movimientos where id=?";
		Connection conexion = GestionarCuentasDao.getConexion();
		if (conexion != null)
			try(PreparedStatement preparedStatement = conexion.prepareStatement(sql);) {
				
				preparedStatement.setInt(1, idMovimiento);
				salida = preparedStatement.executeUpdate();

			} catch (Exception e) {
				e.printStackTrace();
			}

		return salida;

	}

	public static List<MovimientoCuenta> getMovimientosDeCuentaBaseDatos(int cuentaId) {
		List<MovimientoCuenta> movimientos = new ArrayList<>();

		String sql = "select id,fecha,concepto,importe,cuenta_id from movimientos where cuenta_id=?";
		Connection conexion = GestionarCuentasDao.getConexion();
		if (conexion != null)
			try (PreparedStatement preparedStatement = conexion.prepareStatement(sql);) {
				preparedStatement.setInt(1, cuentaId);
				ResultSet resultSet = preparedStatement.executeQuery();
				while (resultSet.next()) {
					MovimientoCuenta movimientoCuenta = new MovimientoCuenta(resultSet.getInt(1), resultSet.getDate(2),
							resultSet.getString(3), resultSet.getInt(4), resultSet.getInt(5));
					movimientos.add(movimientoCuenta);
				}
			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				GestionarCuentasDao.desconectar(conexion);
			}

		return movimientos;
	}

	public static int grabaMovimientoBaseDatos(String concepto, int importe, int cuentaId) {

		int salida = 0;
		Connection conexion = GestionarCuentasDao.getConexion();

		if (conexion != null)
			try (Statement statement = conexion.createStatement();) {
				salida = statement.executeUpdate("insert into movimientos " + "(concepto, importe, cuenta_id) values ('"
						+ concepto + "'," + importe + "," + cuentaId + ")");

			} catch (SQLException e) {
				e.printStackTrace();
			} finally {
				desconectar(conexion);
			}

		return salida;
	}

}
