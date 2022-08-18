import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
  public employees: Employee[] = [];
  
  
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
   this.getEmployees();
  }

  public getEmployees(): void {
    this.employeeService.getEmployeesList().subscribe({
     next: (response: Employee[]) => {
        this.employees = response;
      },
     error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }
  public onDeleteEmployee(id: number): void {
    this.employeeService.deleteEmployee(id).subscribe({
     next: (response: void) => {
        console.log(response);
        this.getEmployees();
      },
    error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }
 public editEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }
 public employeeDetails(id: number){
  this.router.navigate(['employee-details', id]);
 }
 public searchEmployees(key: string): void {
  console.log(key);
  const results: Employee[] = [];
  for (const employee of this.employees) {
    if (employee.firstName.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.lastName.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.emailId.toLowerCase().indexOf(key.toLowerCase()) !== -1){
      results.push(employee);
    }
  }
  this.employees = results;
  if (results.length === 0 || !key) {
    this.getEmployees();
  }
}

}
