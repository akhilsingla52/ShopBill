import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { User } from '../../shared/models/User'

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  getUserPage(paramValues: any) {
    let params = new HttpParams();
    params = params.append('page', paramValues.page-1);
    params = params.append('size', paramValues.size);
    if(paramValues.sort.length >0) {
      params = params.append('sort', paramValues.sort[0]);
    }
    params = params.append('search', paramValues.search);
    params = params.append('userType', paramValues.search);
    return lastValueFrom(this.http.get(`user/page`, { params: params }))
      .then(res => res)
      .catch(this.handleError);
  }

  createUpdateUser(user: User) {
    return lastValueFrom(this.http.post(`user/`, user))
      .then(res => res)
      .catch(this.handleError);
  }

  deleteUserById(userId: number) {
    return lastValueFrom(this.http.delete(`user/` + userId))
      .then(res => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}