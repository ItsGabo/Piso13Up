import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-changesrequest',
  templateUrl: './changesrequest.component.html',
  styleUrls: ['./changesrequest.component.css']
})
export class ChangesrequestComponent implements OnInit {

  myForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.myForm = this.fb.group({
      changeRequest: ['', [Validators.required]],
      
    });
    
   }

  ngOnInit(): void {
  }

  saveData() {
    console.log(this.myForm.value);
  }
}
