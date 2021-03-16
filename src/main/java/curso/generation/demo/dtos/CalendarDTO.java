package curso.generation.demo.dtos;

import java.sql.Date;

import org.springframework.stereotype.Component;


import curso.generation.demo.entidades.Status;
import curso.generation.demo.repositorios.StatusCRUDRepository;


public class CalendarDTO {

	
	
	private int id;
	private Date fecha;
	private Status status;
	private int fila;//semana del mes o semana del año
	private int columna;// dia de la semana
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
	public Status getStatus() {
		return status;
	}
	public void setStatus(Status status) {
		this.status = status;
	}
	public int getFila() {
		return fila;
	}
	public void setFila(int fila) {
		this.fila = fila;
	}
	public int getColumna() {
		return columna;
	}
	public void setColumna(int columna) {
		this.columna = columna;
	}
	
}
