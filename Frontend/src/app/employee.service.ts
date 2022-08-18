import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private httpClient: HttpClient) { }

 public getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.apiServerUrl}/api/v1/employees`);
  }
  public createEmployee(employee: Employee): Observable<Object>{
   return this.httpClient.post(`${this.apiServerUrl}/api/v1/create`, employee);
  }
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.apiServerUrl}/api/v1/update/${id}`, employee);
  }
  public deleteEmployee(id: number): Observable<void>{
    return this.httpClient.delete<void>(`${this.apiServerUrl}/api/v1/delete/${id}`);
  }
  public getEmployeeByid(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.apiServerUrl}/api/v1/getEmployeeBy/${id}`)
  }
}
