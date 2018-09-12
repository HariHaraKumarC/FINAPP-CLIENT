import {Portfolio} from "./portfolio";
import {FixedDeposits} from "./fixed-deposits";

export class Savings {
  savingsId:number;
  principalAmount:number;
  currentValue:number;
  interestAccrued:number;
  interestEarned:number;
  interestReceived:number;
  fixedDeposits:FixedDeposits;
}

export class SavingsSummaryTable {
  savingsType:string;
  principalAmount:number;
  currentValue:number;
  interestAccrued:number;
  interestEarned:number;
  interestReceived:number;
  savingsTypeRouterLink:string;
}
