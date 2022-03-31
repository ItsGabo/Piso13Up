import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-importantinformation',
  templateUrl: './importantinformation.component.html',
  styleUrls: ['./importantinformation.component.css']
})
export class ImportantinformationComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, public fb: FormBuilder) { 
    this.myForm = this.fb.group({
      codeGoogle: ['', [Validators.required]],
      conditionsAndTerms: ['', [Validators.required]],
      privacity: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {
  }

  nextpage() {
    console.log('hi')
    this.router.navigate(['register']);
  }
  saveData() {
    console.log(this.myForm.value);
  }

}
