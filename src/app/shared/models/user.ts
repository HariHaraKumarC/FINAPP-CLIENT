/**
 * Created by HariHaraKumar on 16/01/2018.
 */

import {Portfolio} from "./portfolio";

export class User {
  userId:number;
  firstName:string;
  lastName:string;
  email:string;
  birthDate:string;
  mobileNumber:string;
  password:string;
  userType:number;
  portfolio:Portfolio;
}
