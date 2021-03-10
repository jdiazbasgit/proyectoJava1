package curso.generation.demo.entidades;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;


@Entity
@Table(name = "calendario")
public class Calendar {

	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	
	
	@Column
	@Temporal(TemporalType.DATE)
	private Date fecha;
	
	
	@Column
	private int estados_id;


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public Date getFecha() {
		return fecha;
	}


	public void setFecha(Date fecha) {
		this.fecha = fecha;
	}


	public int getEstados_id() {
		return estados_id;
	}


	public void setEstados_id(int estados_id) {
		this.estados_id = estados_id;
	}
	
	
}
