import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { ADMIN_URI } from '../../Shared/utils/Const';

@Injectable()
export class CodeService {

  constructor(private http: HttpClient) { }

  getCodeList() {
    return lastValueFrom(this.http.get(ADMIN_URI + `codes/list`))
      .then(res => res)
      .catch(this.handleError)
  }

  getCodeListByParentCodeKey(parentCodeKey) {
    return lastValueFrom(this.http.get(ADMIN_URI + `codes/list/` + parentCodeKey))
      .then(res => res)
      .catch(this.handleError)
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}