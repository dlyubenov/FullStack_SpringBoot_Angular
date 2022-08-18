import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {


  id!: number;

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService, 
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id,'getEmployee');
    this.employeeService.getEmployeeByid(this.id).subscribe({
      next:(response) =>{
        console.log(response);
        this.employee = response;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }

 onUpdateEmployee(addForm: NgForm): void {
    this.employeeService.updateEmployee(this.id, addForm.value).subscribe({
      next:(response) => {
        console.log(response);
        this.goToEmployeeList();
        addForm.reset;
      },
      error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
    });
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
}
