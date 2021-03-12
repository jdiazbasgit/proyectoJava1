package curso.generation.demo.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.Day;

@Repository
public interface DaysCRUDRepository extends CrudRepository<Day, Integer> {

	
	@Query("from Day as d  where d.especial=:dato")
	public Iterable<Day> getJornadasConUno(boolean dato);

}
