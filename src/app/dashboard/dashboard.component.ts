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


 
  // ngOnInit(): void {
  //   this.employeepayrollList = localStorage.getItem('EmployeePayrollList') ?
  //     JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
  //   this.employeeCount = this.employeepayrollList.length;

  // }

 
  // delete(i: number) {
  //   console.log(i);
  //   console.log(this.employeepayrollList);
  //   if (this.employeepayrollList !== null) {
  //     const empList = this.employeepayrollList;
  //     empList.splice(i, 1);
  //     localStorage.setItem('EmployeePayrollList', JSON.stringify(empList));
  //     this.employeeCount = this.employeepayrollList.length;
  //   }
  //   this.ngOnInit();
  // }


  // update(i: number) {
  //   const dialogRef = this.dialog.open(AddEmployeeComponent, {
  //     data: i
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //     this.ngOnInit();
  //   })
  // }

  ngOnInit(): void {
    
  this.loadData(); 
  }

  loadData(): void {

    this.httpService.getEmployeeData().subscribe(response=>{
      this.employeeDetails = response.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
    
    //console.log(this.httpService.getEmployeeData);
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
    this.router.navigate(['']);

    }
  }