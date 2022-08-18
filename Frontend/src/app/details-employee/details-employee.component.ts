import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {
employee!: Employee;
id!: number
  constructor(private employeeService: EmployeeService, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id, 'empId');
    this.employeeService.getEmployeeByid(this.id).subscribe({
      next:(response: Employee) => {
        console.log(response);
        this.employee = response;
      }
    })
  }

}
