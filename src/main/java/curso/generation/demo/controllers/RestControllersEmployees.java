package curso.generation.demo.controllers;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import curso.generation.demo.entidades.Employee;
import curso.generation.demo.repositorios.EmployeeCRUDRepository;

@RestController
public class RestControllersEmployees {

@Autowired
private EmployeeCRUDRepository employeeRepository;

@PostMapping(value="")//para el formulario de alta empleados
public Employee altaEmpleado(@RequestParam String nombre,@RequestParam String apellido, @RequestParam String dni, @RequestParam String identificador, @RequestParam String fecha_alta) {
	return getEmployeeRepository().getEmployeeAlta(nombre, apellido, dni, identificador, fecha_alta);
}


@PutMapping(value= "")//para el formulario de modificar empleados
public Employee modificarEmpleado(@RequestParam String nombre, @RequestParam String apellido,@RequestParam String dni, @RequestParam String identificador, @RequestParam String fecha_alta, @RequestParam String fecha_baja) {
	return "";
}




public EmployeeCRUDRepository getEmployeeRepository() {
	return employeeRepository;
}

public void setEmployeeRepository(EmployeeCRUDRepository employeeRepository) {
	this.employeeRepository = employeeRepository;
} 



	
}
