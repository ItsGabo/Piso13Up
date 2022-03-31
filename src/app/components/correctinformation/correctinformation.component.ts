import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-correctinformation',
  templateUrl: './correctinformation.component.html',
  styleUrls: ['./correctinformation.component.css']
})
export class CorrectinformationComponent implements OnInit {
  
  myForm: FormGroup;

  constructor(private router: Router, public fb: FormBuilder) { 
    this.myForm = this.fb.group({
      shortDescription: ['', [Validators.required]],
      differentCompany: ['', [Validators.required]],
      organizeHelper: ['', [Validators.required]],
      listProducts: ['', [Validators.required]],
      chooseFiles: ['', [Validators.required]],
      solveSurvey: ['', [Validators.required]],
      callActions: ['', [Validators.required]],
      helfulThings: ['', [Validators.required]],
      chooseFiles2: ['', [Validators.required]],
      chooseFiles3: ['', [Validators.required]],
      pageName: ['', [Validators.required]],
      pageText: ['', [Validators.required]],
      chooseFiles4: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
  }

  companycontact() {
    console.log('hi')
    this.router.navigate(['companycontact']);
  }
  saveData() {
    console.log(this.myForm.value);
  }
}
