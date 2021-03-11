package curso.generation.demo.entidades;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="empleados_estados")
public class Employee_status {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	@ManyToOne
	@JoinColumn(name="EMPLEADOS_ID")
	private Employee employee;
	
	@ManyToOne
	@JoinColumn(name="ESTADOS_ID")
	private Status status;
	
	@ManyToOne
	@JoinColumn(name="CALENDARIOS_ID")
	private Calendar calendar ;
	
	@ManyToOne
	@JoinColumn(name="JORNADAS_ID")
	private Day day ;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Employee getEmployee() {
		return employee;
	}

	public void setEmployee(Employee employee) {
		this.employee = employee;
	}

	public Status getState() {
		return status;
	}

	public void setState(Status status) {
		this.status = status;
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
	
}