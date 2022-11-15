import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signUpForm !: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpClient,
    private router:Router
    ) {}

    ngOnInit(): void {
      this.signUpForm = this.formBuilder.group({
        empID:[''],
        empName:[''],
        password:['']
      })
    }

    signUp(){
      this.httpClient.post<any>("http://localhost:8080/auth/emp/registerEmp", this.signUpForm.value)
      .subscribe(res=>{
        alert("Sign up Successfull!");
        console.log(this.signUpForm.value);
        this.signUpForm.reset();
        this.router.navigate(['login']);
    
      }, error =>{
        alert("something went wrong!");
      })
    }

}
