package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.Calendar;

@Repository
public interface CalendarsCRUDRepository extends CrudRepository<Calendar, Integer> {

}
