import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Token} from '../../models/Token';
import {tap} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  BASE_URL = 'https://giroscopio-task-manager.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  getTokenForLoginHttp(login: any): Observable<Token>{

    return this.http.post<Token>(this.BASE_URL+'auth/login',login);
  }

  getTokenForRefreshHttp(){
    // @ts-ignore
    let token: Token = {
      refresh_token: <any>this.getRefreshTokenFromStorage()
    };
    return this.http.post<Token>(this.BASE_URL+'auth/login/refresh', token).pipe(
      tap((data)=>{
        this.saveTokenInStorage(data.access_token);
        this.saveRefreshTokenInStorage(data.refresh_token);
      })
    );
  }

  saveTokenInStorage(token: string): void {
    localStorage.setItem('token', token);
  }

  getTokenFromStorage(): string | null {
    return localStorage.getItem('token');
  }

  saveRefreshTokenInStorage(refreshToken: string): void {
    localStorage.setItem('refreshToken', refreshToken);
  }

  getRefreshTokenFromStorage(): string | null {
    return localStorage.getItem('refreshToken');
  }
}