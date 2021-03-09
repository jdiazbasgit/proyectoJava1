package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Employee;

public interface EmployeeCRUDRepository extends CrudRepository<Employee, Integer> {

}
