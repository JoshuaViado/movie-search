import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endpoints } from 'src/app/shared/enums/endpoint.enum';
import { IUser } from 'src/app/shared/interfaces/user.interface';

@Injectable()
export class UserApiService {
  private token =
    'Bearer 851e4672ae4872008a1695bac070a0038e0a50efad795f679a89485b6589de9d';

  constructor(private readonly httpClient: HttpClient) {}

  signUpUser(user: IUser): Observable<IUser> {
    const url = `${Endpoints.GoRest}/users`;

    return this.httpClient.post<IUser>(url, user, {
      headers: { Authorization: this.token },
    });
  }

  getUser(id: string): Observable<IUser> {
    const url = `${Endpoints.GoRest}/users/${id}`;
    return this.httpClient.get<IUser>(url, {
      headers: { Authorization: this.token },
    });
  }
}
