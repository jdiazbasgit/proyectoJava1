package curso.generation.demo.repositorios;

import java.util.Date;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Calendar;

public interface CalendarCRUDRepository extends CrudRepository<Calendar, Date> {

}