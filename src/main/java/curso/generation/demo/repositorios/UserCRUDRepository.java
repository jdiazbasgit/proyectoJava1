package curso.generation.demo.repositorios;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.User;

public interface UserCRUDRepository extends CrudRepository<User, Integer> {

	
	
}
