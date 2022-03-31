import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { IPayPalConfig } from 'ngx-paypal';
import { ICreateOrderRequest } from "ngx-paypal";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-productbilling',
  templateUrl: './productbilling.component.html',
  styleUrls: ['./productbilling.component.css']
})
export class ProductbillingComponent implements OnInit {

  public payPalConfig?: IPayPalConfig;
  public showPaypalButtons: boolean;
  public value: string | number;

  myForm: FormGroup;

  

  constructor(private router: Router, public fb: FormBuilder) { 
    this.myForm = this.fb.group({
        rfc: ['', [Validators.required]],
        paymentMethod: ['', [Validators.required]],
        socialReason: ['', [Validators.required]],
        cfdiUse: ['', [Validators.required]],
        email: ['', [Validators.required]],
      });
  }

  

  ngOnInit(): void {
    this.initConfig();
  }

  

  

  private initConfig(): void {
    this.payPalConfig = {
        currency: 'MXN',
        clientId: 'AU_i24fjFOQM_JsnznpJ7ATHyS_XP8Y7fNIkiJjJ69Y2UWl4dlHxYA5QjzlfdB9u9I3bU2e2sdXlwP1o',
        createOrderOnClient: (data) => < ICreateOrderRequest > {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'MXN',
                    value: '100.00',
                    breakdown: {
                        item_total: {
                            currency_code: 'MXN',
                            value: '100.00'
                            
                        }
                    }
                },
                items: [{
                    name: 'Enterprise Subscription',
                    quantity: '1',
                    category: 'DIGITAL_GOODS',
                    unit_amount: {
                        currency_code: 'MXN',
                        value: '100.00',
                    },
                }]
            }]
        },
        advanced: {
            commit: 'true'
        },
        style: {
            label: 'paypal',
            layout: 'vertical'
        },
        onApprove: (data, actions) => {
            console.log('onApprove - transaction was approved, but not authorized', data, actions);
            actions.order.get().then(details => {
                console.log('onApprove - you can get full order details inside onApprove: ', details);
            });
        },
        onClientAuthorization: (data) => {
            console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        },
        onCancel: (data, actions) => {
            console.log('OnCancel', data, actions);
        },
        onError: err => {
            console.log('OnError', err);
        },
        onClick: (data, actions) => {
            console.log('onClick', data, actions);
        }
    };
  }

  pay() {
    this.showPaypalButtons = true;
  }

  back(){
    this.showPaypalButtons = false;
  }

  domain(){
    this.router.navigate(['domain'])
  }

  saveData() {

    console.log(this.myForm.value);
  }

  
}


