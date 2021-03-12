package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Status;

public interface StatusesCRUDRepository extends CrudRepository<Status, Integer> {

}
