package curso.generation.demo.repositorios;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.User;

public interface UsersCRUDRepository extends CrudRepository<User, Integer> {
	
	@Query("from User u where u.user=:user and u.password=:password")
	public User getUserByUsuarioAndClave(String user, String password);
	
	@Query("from User u where u.user=:username")
	public User findByUserName(String username);
	@Override
	default Optional<User> findById(Integer id) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	default Iterable<User> findAll() {
		return null;
	}
}
