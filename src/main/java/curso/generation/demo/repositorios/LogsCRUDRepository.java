package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Log;

public interface LogsCRUDRepository extends CrudRepository<Log, Integer> {

}
