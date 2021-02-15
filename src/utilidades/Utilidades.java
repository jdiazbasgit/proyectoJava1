package utilidades;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Utilidades {

	//tipo 0 numero, tipo 1 texto
	public static String getTeclado(int tipo) {
		String salida = null;
		boolean fin = false;
		while (!fin) {
			BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
			try {
				salida = bufferedReader.readLine();
				if (tipo == 0) {
					int salidaNumero = Integer.parseInt(salida);
				}
				fin=true;
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (NumberFormatException e) {
				System.out.println("no has introducido un número");

			}
		}
		return salida;
	}

}

