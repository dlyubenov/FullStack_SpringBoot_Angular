import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{ 
  title =''

  ngOnInit(): void {
  
  }
}
