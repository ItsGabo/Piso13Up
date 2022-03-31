import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-forgottenpasword',
  templateUrl: './forgottenpasword.component.html',
  styleUrls: ['./forgottenpasword.component.css']
})
export class ForgottenpaswordComponent implements OnInit {

  myForm: FormGroup;

  constructor( private router: Router, public fb: FormBuilder) { 
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  newpassword(){
    this.router.navigate(['newpassword'])
  }
  saveData() {
    console.log(this.myForm.value);
  }

}
