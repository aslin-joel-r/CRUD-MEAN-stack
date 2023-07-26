import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: []
})
export class EmployeesComponent implements OnInit{

  constructor(public service : EmployeeService) { }

  ngOnInit(): void {
    this.service.fetchEmployees();
  }

}
