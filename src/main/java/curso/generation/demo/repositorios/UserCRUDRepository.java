package curso.generation.demo.repositorios;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.Day;
import curso.generation.demo.entidades.Role;
import curso.generation.demo.entidades.User;

public interface UserCRUDRepository extends CrudRepository<User, Integer> {
 
	
}
