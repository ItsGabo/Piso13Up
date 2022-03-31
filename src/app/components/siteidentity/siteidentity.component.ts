import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-siteidentity',
  templateUrl: './siteidentity.component.html',
  styleUrls: ['./siteidentity.component.css']
})
export class SiteidentityComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, public fb: FormBuilder) { 
    this.myForm = this.fb.group({
      siteTitle: ['', [Validators.required]],
      shortDescription: ['', [Validators.required]],
      
    });
  }

  ngOnInit(): void {
  }


  demo() {
    console.log('hi')
    this.router.navigate(['demo']);
  }
  saveData() {
    console.log(this.myForm.value);
  }
}
