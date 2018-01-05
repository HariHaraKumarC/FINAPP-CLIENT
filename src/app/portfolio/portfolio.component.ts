import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Savings} from "../savings/savings";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  savingsData = new MatTableDataSource<Savings>(SAVINGS_DATA);
  savingsDisplayedColumns = ['principalAmount', 'currentValue', 'interestAccrued', 'interestEarned', 'interestReceived'];

  constructor() {
  }

  ngOnInit() {
  }
}

const SAVINGS_DATA:Savings[] = [
  {savingsId: 1, principalAmount: 15000.00, currentValue: 15500.52, interestAccrued: 500.52, interestEarned: 500.52, interestReceived: 0.00, portfolio:null},
];
