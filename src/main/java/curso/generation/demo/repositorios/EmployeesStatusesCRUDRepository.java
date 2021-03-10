package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.EmployeeStatus;

public interface EmployeesStatusesCRUDRepository extends CrudRepository<EmployeeStatus, Integer> {

}
