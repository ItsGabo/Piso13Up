import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  productbilling() {
    console.log('hi')
    this.router.navigate(['productbilling']);
  }
  siteIdentity(){
    this.router.navigate(['siteidentity'])
  }

}
