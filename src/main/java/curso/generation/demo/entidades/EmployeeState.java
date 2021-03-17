package curso.generation.demo.entidades;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "empleados_estados")
public class EmployeeState {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ManyToOne
	@JoinColumn(name = "empleados_id")
	private  Employee employee;
	
	@ManyToOne
	@JoinColumn(name = "estados_id")
	private Status estado;
	
	@ManyToOne
	@JoinColumn(name = "calendarios_id")
	private Calendar calendar;
	
	@ManyToOne
	@JoinColumn(name = "jornadas_id")
	private Day day;

	public int getId() {
		return id;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Status getEstado() {
		return estado;
	}

	public void setEstado(Status estado) {
		this.estado = estado;
	}

	public Calendar getCalendar() {
		return calendar;
	}

	public void setCalendar(Calendar calendar) {
		this.calendar = calendar;
	}

	public Day getDay() {
		return day;
	}

	public void setDay(Day day) {
		this.day = day;
	}

	public void setId(int id) {
		this.id = id;
	}

	
	
}
