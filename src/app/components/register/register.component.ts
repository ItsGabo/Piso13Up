import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    captcha: string;
    email: string;

    myForm: FormGroup;

  constructor(
    private router: Router,
    public fb: FormBuilder,
    private auth: AuthService
  ) {
    this.captcha= '';
    this.email= 'Secrect@email.com';

    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      passwordCheck: ['', [Validators.required]],
      second_lastname: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }
  
  resolved(captchaResponse: string){
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha)
  }

  mainpage() {
    console.log('hi')
    this.router.navigate(['mainpage']);
  }

  saveData() {
    this.auth.register(this.myForm.value).subscribe(
      resp => {
        console.log(resp);
        
      }, error => {
        console.log(error);
        
      }
    )
  }
}
