package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.Rol;

@Repository
public interface RolsCRUDRepository extends CrudRepository<Rol, Integer> {

}
