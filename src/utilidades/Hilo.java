package utilidades;

public class Hilo extends Thread{

	private String nombre;
	
	public Hilo(String nombre) {
		this.nombre = nombre;
	}
	
	public void run() {
		
		try {
			ejecutar(getNombre());
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
			
		
	}
	
	public void ejecutar(String nombre) throws InterruptedException {
		
		Thread.sleep(10000);
		
		for (int i = 0; i < nombre.length(); i++) {
			System.out.println(nombre.substring(0,i));
			Thread.sleep(1000);
		
		}
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	
	
	
}
