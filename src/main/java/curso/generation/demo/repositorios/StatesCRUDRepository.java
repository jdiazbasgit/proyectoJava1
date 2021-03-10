package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.State;

public interface StatesCRUDRepository extends CrudRepository<State, Integer> {

}
