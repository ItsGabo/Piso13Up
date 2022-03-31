import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-companycontact',
  templateUrl: './companycontact.component.html',
  styleUrls: ['./companycontact.component.css']
})
export class CompanycontactComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, public fb: FormBuilder) {
    this.myForm = this.fb.group({
      whatsapp: ['', [Validators.required]],
      phone1: ['', [Validators.required]],
      phone2: ['', [Validators.required]],
      contactMail: ['', [Validators.required]],
      informationSendMail: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      state: ['', [Validators.required]],
      neighbourhood: ['', [Validators.required]],
      exteriorNumber: ['', [Validators.required]],
      city: ['', [Validators.required]],
      municipality: ['', [Validators.required]],
      street: ['', [Validators.required]],
      interiorNumber: ['', [Validators.required]],
      
    });
   }

  ngOnInit(): void {
  }

  socialnetwork() {
    console.log('hi')
    this.router.navigate(['socialnetwork']);
  }
  saveData() {
    console.log(this.myForm.value);
  }
}
