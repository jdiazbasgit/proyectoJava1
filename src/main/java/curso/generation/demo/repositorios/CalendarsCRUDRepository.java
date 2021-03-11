package curso.generation.demo.repositorios;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Calendar;

public interface CalendarsCRUDRepository extends CrudRepository<Calendar, Integer> {

	
}
