package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.Employee;

@Repository
public interface EmployeesCRUDRepository extends CrudRepository<Employee, Integer> {

}
