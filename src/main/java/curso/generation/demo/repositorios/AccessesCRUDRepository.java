package curso.generation.demo.repositorios;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Access;

public interface AccessesCRUDRepository extends CrudRepository<Access, Integer> {

		@Query(value ="from Access as a where a.month=:mes and a.year=:anio")
		public Iterable<Access> getAccessByAnioAndMes(int anio, int mes);
		
}
