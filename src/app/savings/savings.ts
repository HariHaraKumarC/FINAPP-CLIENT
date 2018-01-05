import {Portfolio} from "../portfolio/portfolio";

export class Savings {
  savingsId:number;
  principalAmount:number;
  currentValue:number;
  interestAccrued:number;
  interestEarned:number;
  interestReceived:number;
  portfolio:Portfolio;
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
