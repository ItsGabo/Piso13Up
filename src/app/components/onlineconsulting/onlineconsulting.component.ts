import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-onlineconsulting',
  templateUrl: './onlineconsulting.component.html',
  styleUrls: ['./onlineconsulting.component.css']
})
export class OnlineconsultingComponent implements OnInit {

  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required]],
    });
   }

  ngOnInit(): void {
  }

  saveData() {
    console.log(this.myForm.value);
  }

}
