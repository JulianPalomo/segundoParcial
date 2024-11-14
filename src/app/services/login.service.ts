import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface User{
  email:string,
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiURL = 'https://utn-lubnan-api-2.herokuapp.com/api/user/login';

  constructor(private http: HttpClient) { }

  login(user: User): Promise<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(this.apiURL, user, { headers }).toPromise();
  }

}