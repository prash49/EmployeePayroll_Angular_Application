import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';

import { HttpServiceService } from '../services/http-service.service';
import {Router} from '@angular/router'; 


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  employeeDetails: any;
  employeeCount: number;

  constructor(public dialog: MatDialog, private httpService: HttpServiceService, private router: Router) { }

  ngOnInit(): void {
    
  this.loadData(); 
  }

  loadData(): void {

    this.httpService.getEmployeeData().subscribe(response=>{
      this.employeeDetails = response.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
    
  
  }


  delete(id: number) {
    this.httpService.deleteEmployeeData(id).subscribe(data=> {
      console.log(data.data);
      this.ngOnInit();      
    });
  }

  update(employee) {
    console.log(employee);
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      data: employee
    });
    
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.ngOnInit();
    });
    

    }
  }