import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styles: [
  ]
})
export class EmployeeFormComponent {
  submitted:boolean=false;

  constructor(public service:EmployeeService,private toastr:ToastrService) { }

  onSubmit(){
    this.submitted=true;
    if (this.service.employeeForm.valid)
      this.service.postEmployee().subscribe(res=>{
        this.resetForm();
        this.toastr.success('Created Successfully','Employee Register');
        this.service.fetchEmployees();
      })
    }

    resetForm(){
      this.service.employeeForm.reset();
      this.submitted=false;
    }
}
