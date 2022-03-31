import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-almostfinish',
  templateUrl: './almostfinish.component.html',
  styleUrls: ['./almostfinish.component.css']
})
export class AlmostfinishComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, public fb: FormBuilder) { 
    this.myForm = this.fb.group({
      mail1: ['', [Validators.required]],
      password: ['', [Validators.required]],
      verifyPassword: ['', [Validators.required]],
      mail2: ['', [Validators.required]],
      password2: ['', [Validators.required]],
      verifyPassword2: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
  }
  
  importantinformation() {
    console.log('hi')
    this.router.navigate(['importantinformation']);
  }
  saveData() {
    console.log(this.myForm.value);
  }

}
