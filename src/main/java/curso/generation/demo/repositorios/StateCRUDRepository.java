package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.State;

@Repository
public interface StateCRUDRepository extends CrudRepository<State, Integer> {

}
