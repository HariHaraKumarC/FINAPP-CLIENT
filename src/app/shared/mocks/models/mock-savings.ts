/**
 * Created by HariHaraKumar on 17/01/2018.
 */
import {Savings} from "../../models/savings";
import {FIXED_DEPOSITS} from "./mock-fixed-deposits";

export const SAVINGS:Savings[]=[
  {
    savingsId: 1,
    principalAmount: 10.5,
    currentValue: 0,
    interestAccrued: 0,
    interestEarned: 0,
    interestReceived: 0,
    fixedDeposits:FIXED_DEPOSITS[0]
  }
];
