import { Component, OnInit } from '@angular/core';
import { MatTableDataSource,MatDialog,MatDialogRef } from '@angular/material';
import { FDTransactions } from "../shared/models/fd-transactions";
import { CreateFdtransactionComponent } from "./create-fdtransaction/create-fdtransaction.component";

@Component({
  selector: 'app-fixed-deposits',
  templateUrl: './fixed-deposits.component.html',
  styleUrls: ['./fixed-deposits.component.css']
})
export class FixedDepositsComponent implements OnInit {
  fdTransactionsData = new MatTableDataSource<FDTransactions>(FD_TRANSACTIONS_DATA);
  fdTransactionsDisplayedColumns = ['accountNumber', 'principalAmount', 'currentValue', 'interestEarned', 'maturityDate', 'maturityAmount', 'actions'];
  createFDTransactionDialogRef: MatDialogRef <CreateFdtransactionComponent>;
  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

  openCreateFDTransactionDialog(): void {
    this.createFDTransactionDialogRef=this.dialog.open(CreateFdtransactionComponent,
      {
        width: '50%'
      });
  }
}

const FD_TRANSACTIONS_DATA:FDTransactions[] = [
  {fdTransactionsId: 1, status:1, accountNumber:'STFC00001', financialInstitutionName:'STFC', startDate: '01/01/2018', maturityDate:'01/01/2019', interestPayoutFrequency:0, interestReInvestmentFrequency:4, interestRate:7.5, principalAmount: 15000.00, currentValue: 15500.52, maturityAmount:16000.52,interestAccrued: 500.52, interestEarned: 500.52, interestReceived: 0.00 },
  {fdTransactionsId: 2, status:1, accountNumber:'STFC00002', financialInstitutionName:'STFC', startDate: '01/01/2018', maturityDate:'01/01/2019', interestPayoutFrequency:0, interestReInvestmentFrequency:4, interestRate:7.5, principalAmount: 15000.00, currentValue: 15500.52, maturityAmount:16000.52,interestAccrued: 500.52, interestEarned: 500.52, interestReceived: 0.00 },
  {fdTransactionsId: 3, status:1, accountNumber:'STFC00003', financialInstitutionName:'STFC', startDate: '01/01/2018', maturityDate:'01/01/2019', interestPayoutFrequency:0, interestReInvestmentFrequency:4, interestRate:7.5, principalAmount: 15000.00, currentValue: 15500.52, maturityAmount:16000.52,interestAccrued: 500.52, interestEarned: 500.52, interestReceived: 0.00 },
  {fdTransactionsId: 4, status:1, accountNumber:'STFC00004', financialInstitutionName:'STFC', startDate: '01/01/2018', maturityDate:'01/01/2019', interestPayoutFrequency:0, interestReInvestmentFrequency:4, interestRate:7.5, principalAmount: 15000.00, currentValue: 15500.52, maturityAmount:16000.52,interestAccrued: 500.52, interestEarned: 500.52, interestReceived: 0.00 },
  {fdTransactionsId: 5, status:1, accountNumber:'STFC00005', financialInstitutionName:'STFC', startDate: '01/01/2018', maturityDate:'01/01/2019', interestPayoutFrequency:0, interestReInvestmentFrequency:4, interestRate:7.5, principalAmount: 15000.00, currentValue: 15500.52, maturityAmount:16000.52,interestAccrued: 500.52, interestEarned: 500.52, interestReceived: 0.00 }
];
