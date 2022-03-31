import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-uploadarticle',
  templateUrl: './uploadarticle.component.html',
  styleUrls: ['./uploadarticle.component.css']
})
export class UploadarticleComponent implements OnInit {

  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      chooseFiles: ['', [Validators.required]],
      chooseFiles1: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  saveData() {
    console.log(this.myForm.value);
  }

}
