import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, public fb: FormBuilder) { 
    this.myForm = this.fb.group({
      domain: ['', [Validators.required]],
      domain1: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
  }

  siteidentity() {
    console.log('hi')
    this.router.navigate(['siteidentity']);
  }
  saveData() {
    console.log(this.myForm.value);
  }
}
