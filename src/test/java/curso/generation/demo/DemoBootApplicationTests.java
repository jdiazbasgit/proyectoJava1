package curso.generation.demo;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import curso.generation.demo.repositorios.DayCRUDRepository;
import curso.generation.demo.repositorios.EmployeeCRUDRepository;


@ExtendWith(SpringExtension.class)
@SpringBootTest
class DemoBootApplicationTests {

	@Autowired
	private EmployeeCRUDRepository repository;
	
	@Autowired
	private DayCRUDRepository repository1;
	
	@Test
	 void contextLoads() {
		assertNotNull(getRepository().findAll());
		
	}
	
	@Test
	void test2() {
		
		assertNotNull(getRepository1().getJornadasConUno(true));
	}

	public EmployeeCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(EmployeeCRUDRepository repository) {
		this.repository = repository;
	}

	public DayCRUDRepository getRepository1() {
		return repository1;
	}

	public void setRepository1(DayCRUDRepository repository1) {
		this.repository1 = repository1;
	}
	
}
