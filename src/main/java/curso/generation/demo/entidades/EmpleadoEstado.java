package curso.generation.demo.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "empleados_estados")
public class EmpleadoEstado {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@Column
	private int empleados_id, estados_id, calendarios_id, jornadas_id;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getEmpleados_id() {
		return empleados_id;
	}

	public void setEmpleados_id(int empleados_id) {
		this.empleados_id = empleados_id;
	}

	public int getEstados_id() {
		return estados_id;
	}

	public void setEstados_id(int estados_id) {
		this.estados_id = estados_id;
	}

	public int getCalendarios_id() {
		return calendarios_id;
	}

	public void setCalendarios_id(int calendarios_id) {
		this.calendarios_id = calendarios_id;
	}

	public int getJornadas_id() {
		return jornadas_id;
	}

	public void setJornadas_id(int jornadas_id) {
		this.jornadas_id = jornadas_id;
	}
	
	
}
