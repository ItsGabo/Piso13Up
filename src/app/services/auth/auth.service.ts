import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserRequest, UserResponse } from 'src/app/interfaces/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url: string = environment.api_url;

  constructor(private _http: HttpClient) { }

  register(user: UserRequest): Observable<UserResponse> {
    return this._http.post<UserResponse>(`${this.api_url}auth/register`, user);
  }
}
