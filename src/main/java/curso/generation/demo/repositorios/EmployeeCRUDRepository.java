package curso.generation.demo.repositorios;

import java.util.Date;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.Employee;

@Repository
public interface EmployeeCRUDRepository extends CrudRepository<Employee, Integer> {

	@Query("from Employee as E where E.nombre=:nombre and E.apellidos=:apellidos and E.dni=:dni and E.identificador=:identificador and E.fecha_alta=:fecha_alta")
	public Employee getEmployeeAlta(String nombre, String apellidos, String dni, String identificador, String fecha_alta);

	@Query("from Employee as E where E.nombre=:nombre and E.apellidos=:apellidos and E.dni=:dni and E.identificador=:identificador and E.fecha_alta=:fecha_alta and E.fecha_baja=:fecha_baja")
	public Employee getEmployeeModificar(String nombre, String apellido, String dni, String identificador, String fecha_alta, String fecha_baja);
}
