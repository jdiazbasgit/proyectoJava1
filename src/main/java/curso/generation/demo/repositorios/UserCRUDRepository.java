package curso.generation.demo.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.User;

public interface UserCRUDRepository extends CrudRepository<User, Integer> {

	@Query("from User u where u.user=:user and u.password=:password")
	public User getLogin (String user, String password);

	@Override
	default Optional<User> findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	default Iterable<User> findAll() {
		// TODO Auto-generated method stub
		return null;
	}
	
}
