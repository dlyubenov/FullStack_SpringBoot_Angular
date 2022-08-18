import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  
  constructor(private employeeService: EmployeeService,
   private router: Router) { }

  ngOnInit(): void {
  }
  

  public onAddEmployee(addForm: NgForm): void {
    document.getElementById('add-employee-form')?.click();
    this.employeeService.createEmployee(addForm.value).subscribe({
     next: (response: Object) => {
        console.log(response);
        this.toListComponent();
        addForm.reset();
      },
     error: (error: HttpErrorResponse) => {
        alert(error.message);
      }
  });
  }

  toListComponent(){
    this.router.navigate(['/employees']);
  }
  
}