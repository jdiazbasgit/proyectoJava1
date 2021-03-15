package curso.generation.demo.repositorios;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import curso.generation.demo.entidades.EmpleadoEstado;

public interface EmpleadoEstadoCRUDRepository extends CrudRepository<EmpleadoEstado, Integer> {

	

}
