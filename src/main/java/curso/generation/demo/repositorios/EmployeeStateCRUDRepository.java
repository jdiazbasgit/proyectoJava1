package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.EmployeeState;

public interface EmployeeStateCRUDRepository extends CrudRepository<EmployeeState, Integer> {

}