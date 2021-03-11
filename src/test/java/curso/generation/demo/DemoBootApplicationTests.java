package curso.generation.demo;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import curso.generation.demo.repositorios.AccessesCRUDRepository;
import curso.generation.demo.repositorios.DaysCRUDRepository;
import curso.generation.demo.repositorios.EmployeeCRUDRepository;


@ExtendWith(SpringExtension.class)
@SpringBootTest
class DemoBootApplicationTests {

	@Autowired
	private EmployeeCRUDRepository repository;
	
	@Autowired
	private DaysCRUDRepository repository1;
	
	@Autowired
	private AccessesCRUDRepository repository2;
	
	@Test
	 void contextLoads() {
		assertNotNull(getRepository().findAll());
		
	}
	
	@Test
	void test2() {
		
		assertNotNull(getRepository1().getJornadasConUno(true));
	}
	@Test
	void test3() {
		assertNotNull(getRepository2().getAccessByAnioAndMes(2019, 0));
	}

	public EmployeeCRUDRepository getRepository() {
		return repository;
	}

	public void setRepository(EmployeeCRUDRepository repository) {
		this.repository = repository;
	}

	public DaysCRUDRepository getRepository1() {
		return repository1;
	}

	public void setRepository1(DaysCRUDRepository repository1) {
		this.repository1 = repository1;
	}

	public AccessesCRUDRepository getRepository2() {
		return repository2;
	}

	public void setRepository2(AccessesCRUDRepository repository2) {
		this.repository2 = repository2;
	}
	
}
