package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Role;

public interface RolesCRUDRepository extends CrudRepository<Role, Integer> {

}
