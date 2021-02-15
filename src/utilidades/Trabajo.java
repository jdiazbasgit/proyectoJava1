package utilidades;

public class Trabajo {

	public static void main(String[] args) {
		
		while (true) {
			System.out.println("Escribe tu nombre");
			String nombre = Utilidades.getTeclado(1);
			
			Hilo hilo = new Hilo (nombre);
			hilo.start();
		}

	}

}
