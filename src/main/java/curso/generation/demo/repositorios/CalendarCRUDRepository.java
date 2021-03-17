package curso.generation.demo.repositorios;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Calendar;

public interface CalendarCRUDRepository extends CrudRepository<Calendar, Date> {

	
	@Query(value="select * from Calendario c where year(c.fecha)=:year",nativeQuery = true )
	List<Calendar> getCalendarByYear(int year);

}
