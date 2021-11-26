import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  private baseUrl: string = "http://localhost:8080/employeePayrollservice";

  constructor(private httpClient: HttpClient) {
    
  }

  getEmployeeData(): Observable<any> {
    return this.httpClient.get(this.baseUrl + "/get");
  }

  addEmployeeData(body: any): Observable<any> {
    return this.httpClient.post(this.baseUrl+"/create", body);
  }

  deleteEmployeeData(id: any): Observable<any> {
    return this.httpClient.delete(this.baseUrl+"/delete/"+id);
  }

  updateEmployeeData(id: number, value: any): Observable<Object> {
    return this.httpClient.put(this.baseUrl+"/update/"+id,value);
  }
}