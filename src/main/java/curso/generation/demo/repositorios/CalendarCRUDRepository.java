package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Calendar;

public interface CalendarCRUDRepository extends CrudRepository<Calendar, Integer> {

}
