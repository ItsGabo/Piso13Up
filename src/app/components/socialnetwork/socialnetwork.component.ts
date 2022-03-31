import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-socialnetwork',
  templateUrl: './socialnetwork.component.html',
  styleUrls: ['./socialnetwork.component.css']
})
export class SocialnetworkComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router: Router, public fb: FormBuilder) {
    this.myForm = this.fb.group({
      facebook: ['', [Validators.required]],
      instagram: ['', [Validators.required]],
      twitter: ['', [Validators.required]],
      youtube: ['', [Validators.required]],
      linkendin: ['', [Validators.required]],
      tiktok: ['', [Validators.required]],
      another: ['', [Validators.required]],
    
    });
   }

  ngOnInit(): void {
  }

  almostfinish() {
    console.log('hi')
    this.router.navigate(['almostfinish']);
  }
  saveData() {
    console.log(this.myForm.value);
  }
}
