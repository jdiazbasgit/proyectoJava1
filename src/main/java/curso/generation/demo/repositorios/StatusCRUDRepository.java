package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Status;

public interface StatusCRUDRepository extends CrudRepository<Status, Integer> {

}
