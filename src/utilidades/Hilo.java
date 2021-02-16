package utilidades;

public class Hilo extends Thread{

	private String nombre;
	
	public Hilo(String nombre) {
		this.nombre = nombre;
	}
	
	@Override
	public void run() {
			ejecutar(getNombre());
	}
	
	public void ejecutar(String nombre)  {
		
		try {
			Thread.sleep(10000);
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		for (int i = 0; i < nombre.length(); i++) {
			System.out.println(nombre.substring(0,i));
			try {
				Thread.sleep(1000);
			} catch (Exception e) {
				e.printStackTrace();
			}
		
		}
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	
	
}
