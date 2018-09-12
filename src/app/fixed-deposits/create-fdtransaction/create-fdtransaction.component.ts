import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-fdtransaction',
  templateUrl: './create-fdtransaction.component.html',
  styleUrls: ['./create-fdtransaction.component.css']
})

export class CreateFdtransactionComponent implements OnInit {

  constructor() { }

  accountNumber=new FormControl('', [Validators.required]);

  getAccountNumberErrorMessages (){
    return this.accountNumber.hasError('required') ? 'Please input a valid account number' : '';
  }

  ngOnInit() {
  }

}
