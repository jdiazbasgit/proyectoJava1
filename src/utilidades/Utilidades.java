package utilidades;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Utilidades {
	
	private Utilidades() {
	}
	
	public static String getTeclado(int tipo) {
		String salida = null;
		boolean fin = false;
		while (!fin) {
			BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
			try {
				salida = bufferedReader.readLine();
				if (tipo == 0) {
					Integer.parseInt(salida);
				}
				fin=true;
			} catch (IOException e) {
				e.printStackTrace();
			} catch (NumberFormatException e) {
				System.out.println("no has introducido un número");

			}
		}
		return salida;
	}

}

