package curso.generation.demo.repositorios;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import curso.generation.demo.entidades.User;

@Repository
public interface UserCRUDRepository extends CrudRepository<User, Integer> {

	@Query("from User u where u.user=:user and u.password=:password")
	public User getUser(String user, String password);
	
}