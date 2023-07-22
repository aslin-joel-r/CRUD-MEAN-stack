import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fb:FormBuilder) { }
  
  employeeForm=this.fb.group({
  _id:[null],
  fullName:[''],
  position:[''],
  location:[''],
  salary:[''],
  });
}
