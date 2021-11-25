import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { HttpServiceService } from '../services/http-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // employeepayrollList: any;
  employeeDetails: any;
  employeeCount: number = 10;

  constructor(public dialog: MatDialog, private httpService: HttpServiceService) { }


 
  // ngOnInit(): void {
  //   this.employeepayrollList = localStorage.getItem('EmployeePayrollList') ?
  //     JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
  //   this.employeeCount = this.employeepayrollList.length;

  // }

 
  // remove(i: number) {
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
    this.httpService.getEmployeeData().subscribe(data=>{
      this.employeeDetails = data.data;
      this.employeeCount = this.employeeDetails.length;
      console.log(this.employeeDetails);
    });
    //console.log(this.httpService.getEmployeeData);
  }


}