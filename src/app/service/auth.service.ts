import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl : string = '';
  signUpUrl : string = '';

  constructor(private http : HttpClient) {

   // this.loginUrl = "http://b116team7onlinejobportal-env.eba-afv23ctu.ca-central-1.elasticbeanstalk.com/auth/login";
    //this.signUpUrl = "http://b116team7onlinejobportal-env.eba-afv23ctu.ca-central-1.elasticbeanstalk.com/auth/register";

    //this.loginUrl="http://3.99.214.16:8080/auth/login"
    this.loginUrl="http://localhost:8080/auth/login"
    //this.signUpUrl="http://3.99.214.16:8080/auth/register"
    this.signUpUrl="http://localhost:8080/auth/register"
  }

  login(user : User) : Observable<any> {
    return this.http.post<any>(this.loginUrl,user);
  }

  signUp(user : User) : Observable<any> {
    return this.http.post<any>(this.signUpUrl,user);
  }

}
