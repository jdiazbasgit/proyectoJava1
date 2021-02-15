package banco;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.List;

public class GestionarCuentas {

	public static void grabarCuentas(List<CuentaCorriente> cuentas) {
		try (ObjectOutputStream objectOutputStream = new ObjectOutputStream(new FileOutputStream("cuentas.banco"))){
			objectOutputStream.writeObject(cuentas);
			objectOutputStream.flush();
			
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
			e.printStackTrace();
		}
	}
	
	@SuppressWarnings("unchecked")
	public static void leerCuentas(List<CuentaCorriente> cuentas) {
		try (ObjectInputStream objectInputStream = new ObjectInputStream (new FileInputStream("cuentas.banco"))){
			// cuentas= (List<CuentaCorriente>) objectInputStream.readObject();
			Cajero.setCuentas((List<CuentaCorriente>) objectInputStream.readObject());
			System.out.println(Cajero.getCuentas());
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println("No existe ninguna cuenta");
		}
	}
}
