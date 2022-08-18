package io.employee.employeemanagement.controller;

import io.employee.employeemanagement.EmployeeService;
import io.employee.employeemanagement.exception.ResourceNotFoundException;
import io.employee.employeemanagement.model.Employee;
import io.employee.employeemanagement.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }




    //getAllEmployees
    @GetMapping("/employees")
    public ResponseEntity<List<Employee>> getAllEmployees(){
        List<Employee> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }
    // create employee
    @PostMapping("/create")
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
        Employee newEmployee =  employeeService.createEmployee(employee);
        return new ResponseEntity<Employee>(newEmployee, HttpStatus.CREATED);
    }
    // get employee by id
    @GetMapping("/getEmployeeBy/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
        Employee employee = employeeService.getEmployeeById(id);
        return new ResponseEntity<Employee>(employee, HttpStatus.OK);
    }
    //update employee
    @PutMapping("/update/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails){
        Employee newEmployee = employeeService.getEmployeeById(id);
        newEmployee.setFirstName(employeeDetails.getFirstName());
        newEmployee.setLastName(employeeDetails.getLastName());
        newEmployee.setEmailId(employeeDetails.getEmailId());
       employeeService.updateEmployee(newEmployee);
        return new ResponseEntity<Employee>(newEmployee,HttpStatus.OK);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
