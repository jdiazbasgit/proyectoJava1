package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Estado;

public interface EstadoCRUDRepository extends CrudRepository<Estado, Integer> {

}
