import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Savings} from "../shared/models/savings";
import {Portfolio} from "../shared/models/portfolio";
import {PortfolioService} from "../shared/services/portfolio/portfolio.service";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  portfolio:Portfolio;
  savingsData:MatTableDataSource<Savings>;
  savingsDisplayedColumns = ['principalAmount', 'currentValue', 'interestAccrued', 'interestEarned', 'interestReceived'];

  constructor(private portfolioService:PortfolioService) {
  }

  ngOnInit() {
    this.getUserPortfolio();
    /*this.getMockedUserPortfolio*/ // Enable if mock details to be fetched
  }

  /**
   * Get User Portfolio details from the Server
   */
  getUserPortfolio():void {
    this.portfolioService.getUserPortfolioDetails(1).subscribe(
      portfolio => {
        this.portfolio = portfolio;
        this.getPortfolioSavingsData(this.portfolio);
      },
      error => console.log(error)
    );
  }

  /**
   * Get User Portfolio details from the Mock
   */
  getMockedUserPortfolio():void {
    this.portfolio = this.portfolioService.getMockUserPortfolioDetails();
  }

  /**
   * Fetches the Saving Summary Data from the Portfolio Details
   */
  getPortfolioSavingsData(portfolio:Portfolio):void {
    var portfolioSavingsSummaryData:Savings;
    portfolioSavingsSummaryData = portfolio.savings;
    console.log(portfolioSavingsSummaryData);
    var savingsDataTableInputArray:Savings[] = [portfolioSavingsSummaryData];
    this.savingsData = new MatTableDataSource<Savings>(savingsDataTableInputArray);
  }
}
