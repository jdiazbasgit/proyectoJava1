package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Access;

public interface LogsCRUDRepository extends CrudRepository<Access, Integer> {

}
