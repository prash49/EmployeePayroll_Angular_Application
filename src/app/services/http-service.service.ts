import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
}