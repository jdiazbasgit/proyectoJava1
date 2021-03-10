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
	@JoinColumn(name = "empleados_id")
	private Employee employee;
	
	@ManyToOne
	@JoinColumn(name = "estados_id")
	private Status status;
	
	@ManyToOne
	@JoinColumn(name = "calendarios_id")
	private Calendar calendar;
	
	@ManyToOne
	@JoinColumn(name = "jornadas_id")
	private Day day;
}
