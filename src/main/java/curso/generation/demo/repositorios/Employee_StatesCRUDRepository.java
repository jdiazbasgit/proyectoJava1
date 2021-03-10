package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.Employee_State;

@Repository
public interface Employee_StatesCRUDRepository extends CrudRepository<Employee_State, Integer> {

}
