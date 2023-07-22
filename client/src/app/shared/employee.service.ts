import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fb:FormBuilder) { }
  
  employeeForm=this.fb.group({
  _id:[null],
  fullName:['',Validators.required],
  position:['',Validators.required],
  location:['',],
  salary:['',Validators.required],
  });
}
