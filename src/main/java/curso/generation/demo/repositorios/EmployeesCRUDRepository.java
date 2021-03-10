package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Employee;

public interface EmployeesCRUDRepository extends CrudRepository<Employee, Integer> {
	
	
}
