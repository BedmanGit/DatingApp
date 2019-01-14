import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

baseUrl = environment.baseUrl;
constructor(private http: HttpClient) { }

getUser(id: number): Observable<User> {
  return this.http.get<User>(this.baseUrl + '/users/' + id);
}
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + '/users');
}
}
