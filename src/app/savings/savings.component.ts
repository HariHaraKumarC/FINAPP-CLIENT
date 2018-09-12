import { Component, OnInit} from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { SavingsSummaryTable } from "../shared/models/savings";

@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  savingsSummaryTableData = new MatTableDataSource<SavingsSummaryTable>(SAVINGS_SUMMARY_TABLE_DATA);
  savingsSummaryTableDisplayedColumns = ['savingsType', 'principalAmount', 'currentValue', 'interestAccrued', 'interestEarned', 'interestReceived'];

  constructor() { }

  ngOnInit() {
  }

}
const SAVINGS_SUMMARY_TABLE_DATA:SavingsSummaryTable[] = [
  {savingsType: 'Fixed Deposits', principalAmount: 15000.00, currentValue: 15500.52, interestAccrued: 500.52, interestEarned: 500.52, interestReceived: 0.00, savingsTypeRouterLink:'/portfolio/savings/fixedDeposits' },
  {savingsType: 'Recurring Deposits', principalAmount: 15000.00, currentValue: 15500.52, interestAccrued: 500.52, interestEarned: 500.52, interestReceived: 0.00, savingsTypeRouterLink:'/portfolio/savings/fixedDeposits' }
];
