package curso.generation.demo.repositorios;

import java.util.Date;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.Employee;

@Repository
public interface EmployeeCRUDRepository extends CrudRepository<Employee, Integer> {

	
}
