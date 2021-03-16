package curso.generation.demo.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.beans.Year;
import curso.generation.demo.dtos.CalendarDTO;
import curso.generation.demo.entidades.Calendar;
import curso.generation.demo.repositorios.CalendarCRUDRepository;
import curso.generation.demo.repositorios.StatusCRUDRepository;

@RestController
public class CalendarRestController {

	@Autowired
	private CalendarCRUDRepository repository;

	@Autowired
	private StatusCRUDRepository repositoryStatus;

	@PostMapping("api/calendarByYear")
	public List<CalendarDTO> getCalendarRest(@RequestBody Year year) {

		List<CalendarDTO> salida = new ArrayList<>();
		List<Calendar> calendario = getRepository().getCalendarByYear(year.getYear());
		for (Calendar calendar : calendario) {
//			@SuppressWarnings("deprecation")
			//GregorianCalendar fecha = new GregorianCalendar(year.getYear(), calendar.getFecha().getMonth(),
				//	calendar.getFecha().getDay());
			CalendarDTO dto = convertirCalendarDto(calendar);
			salida.add(dto);
		}

		return salida;

	}

	private CalendarDTO convertirCalendarDto(Calendar inicio) {
		CalendarDTO dto = new CalendarDTO();
		dto.setId(inicio.getId());
		dto.setFecha(inicio.getFecha());
		dto.setStatus(inicio.getEstado());
		GregorianCalendar fecha = new GregorianCalendar();
		fecha.setTimeInMillis(inicio.getFecha().getTime());
		dto.setColumna(fecha.get(java.util.Calendar.DAY_OF_WEEK));
		dto.setFila(fecha.get(java.util.Calendar.WEEK_OF_MONTH));
		dto.setMes(fecha.get(java.util.Calendar.MONTH));
		return dto;
	}

	@PostMapping("api/crearCalendario")
	public List<CalendarDTO> getCalendar(@RequestBody Year year){
		
		List<CalendarDTO> salida= new ArrayList<>();
		GregorianCalendar inicio= new GregorianCalendar(year.getYear(),0,1);
		while(inicio.get(java.util.Calendar.YEAR)==year.getYear()){
			
			Calendar calendario= new Calendar();
			calendario.setFecha(new java.sql.Date(inicio.getTimeInMillis()));
			
			calendario.setEstado(getRepositoryStatus().findById(1).get());
			
			if(inicio.get(java.util.Calendar.DAY_OF_WEEK)==7 || inicio.get(java.util.Calendar.DAY_OF_WEEK)==1)
				calendario.setEstado(getRepositoryStatus().findById(2).get());	
			CalendarDTO dto=convertirCalendarDto(calendario);
			salida.add(dto);
			getRepository().save(calendario);
			inicio.add(java.util.Calendar.DAY_OF_MONTH, 1);
			
		}
		return salida;
		
	}

	public CalendarCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(CalendarCRUDRepository repository) {
		this.repository = repository;
	}

	public StatusCRUDRepository getRepositoryStatus() {
		return repositoryStatus;
	}

	public void setRepositoryStatus(StatusCRUDRepository repositoryStatus) {
		this.repositoryStatus = repositoryStatus;
	}

}
