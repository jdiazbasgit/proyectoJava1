package curso.generation.demo.repositorios;


import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.Access;

@Repository
public interface AccessesCRUDRepository extends CrudRepository<Access, Integer> {

}
