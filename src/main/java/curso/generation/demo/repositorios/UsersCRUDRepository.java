package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.User;

@Repository
public interface UsersCRUDRepository extends CrudRepository<User, Integer> {

}
