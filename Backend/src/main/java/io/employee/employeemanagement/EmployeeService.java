package io.employee.employeemanagement;

import io.employee.employeemanagement.exception.ResourceNotFoundException;
import io.employee.employeemanagement.model.Employee;
import io.employee.employeemanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeService(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }
    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }
    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }
    public Employee updateEmployee (Employee employee){
        return employeeRepository.save(employee);
    }
    public Employee getEmployeeById(Long id){
        return employeeRepository.findById(id).orElseThrow(() ->
                new ResourceNotFoundException("Employee not exist with id :" + id));
}
    public void deleteEmployee(Long id){
        employeeRepository.deleteById(id);
}
}
