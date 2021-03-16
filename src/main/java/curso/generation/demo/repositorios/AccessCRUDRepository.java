package curso.generation.demo.repositorios;



import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Access;
import curso.generation.demo.entidades.Employee;




public interface AccessCRUDRepository extends CrudRepository<Access, Integer> {

	//@Query(value="SELECT * FROM ACCESOS WHERE YEAR=;ANIO AND MONTH=:MES",nativeQuery = true)
		@Query("from Access a where a.month=:mes and a.year=:anio")
		public Iterable<Access> getAccessByAnioAndMes(int anio, int mes);
		
		
		@Query("from Access a where a.month=:mes and a.year=:anio and a.employee.nombre=:nombre")
		public Iterable<Access> getAccessByAnioAndMesAndName(int anio, int mes, String nombre);

		@Query("from Access a where a.month=:mes and a.year>=:anioOrigen and a.year<=:anioFinal and a.employee.nombre=:nombre")
		public Iterable<Access> getAccessByAnioAndMesAndName(int anioOrigen, int anioFinal,  int mes, String nombre);

		@Query("")
		public List<Access> getAccesosByEmployeeAndMonthAndYear(Employee employee, int month, int year)

}
