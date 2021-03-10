package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Employee_status;

public interface Employees_statusCRUDRepository extends CrudRepository<Employee_status, Integer> {
 
}
