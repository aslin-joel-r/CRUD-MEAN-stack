import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private fb:FormBuilder,private http:HttpClient) { }
  
  readonly baseUrl='http://localhost:3000/api/employees';

  employeeForm=this.fb.group({
  _id:[null],
  fullName:['',Validators.required],
  position:['',Validators.required],
  location:['',],
  salary:['',Validators.required],
  });

  postEmployee(){
    return this.http.post(this.baseUrl,this.employeeForm.value)
  }
  


}

