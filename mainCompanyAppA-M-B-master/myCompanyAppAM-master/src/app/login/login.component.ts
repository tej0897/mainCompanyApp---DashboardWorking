import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  loginForm!: FormGroup;

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      empName: [''],
      password: [''],
    });
  }
  loggedIn: Boolean | any;

  login() {
    this.http
      .post<any>('http://localhost:8080/auth/emp/login', this.loginForm.value)
      .subscribe(
        (res) => {
          alert('Login Successfull!');
          console.log(this.loginForm.value);

          const token = (<any>res).token;
          localStorage.setItem("token", token);

          console.log(token);

          this.loginForm.reset();
          this.router.navigate(['dashboard']);
        },
        (error) => {
          alert('Incorrect Credentials!');
        }
      );
  }


  //   login(){
  //   this.http.get<any>("http://localhost:8080/api/v1/getAllEmp")
  //   .subscribe(res=>{
  //     const user = res.find((a:any)=>{
  //       return a.empName === this.loginForm.value.empName
  //         && a.password === this.loginForm.value.password
  //     });
  //     if(user){
  //       alert("Logged in successfully!");
  //       this.loginForm.reset();
  //       this.router.navigate(['dashboard'])
  //     } else {
  //       alert("user not found");
  //     }
  //   }, error =>{
  //     alert("Something went wrong!")
  //   })
  // }


}
