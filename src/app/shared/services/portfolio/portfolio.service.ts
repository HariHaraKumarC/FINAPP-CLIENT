import {Injectable} from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Portfolio} from "../../models/portfolio";
import {PORTFOLIO} from "../../mocks/models/mock-portfolio";

@Injectable()
export class PortfolioService {
  serverHostUrl="http://localhost:9080";
  getUserPortfolioUrl=this.serverHostUrl+"/portfolio/details?userId=";

  constructor(private http:Http) { }

  getUserPortfolioDetails(userId: number): Observable<Portfolio> {
    return this.http.get(this.getUserPortfolioUrl+userId).map(this.extractData).catch(this.handleError);
  }

  getMockUserPortfolioDetails(): Portfolio {
    return PORTFOLIO[0];
  }

  private extractData(res:Response){
    let body=res.json();
    return body;
  }

  private handleError(error:Response | any){
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
