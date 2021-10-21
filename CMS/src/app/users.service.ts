import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { UserI, UserM } from './models/user.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})

export class UsersService {
  users: any;
  private api = "http://iacenter.victortalamantes.com/users"
  constructor(private http: HttpClient) {
    this.users = null;
  }
  getUsers(): Observable<UserI[]> {
    return this.http.get<UserI[]>(this.api);
  }

  postUser(user: UserM): Observable<UserM> {
    this.api = "http://iacenter.victortalamantes.com/user"
    return this.http.post<UserM>(this.api, user);
  }


  putUser(user: UserI): Observable<UserI> {
    this.api = "http://iacenter.victortalamantes.com/user/"+user.id;
    return this.http.put<UserI>(this.api, user);
  }

}
