package curso.generation.demo.repositorios;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.EmployeeState;

public interface EmployeeStateCRUDRepository extends CrudRepository<EmployeeState, Integer> {

	

}
