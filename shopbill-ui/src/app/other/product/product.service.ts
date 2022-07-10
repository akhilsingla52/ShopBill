import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { Product } from '../../shared/models/Product'

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }

  getProductList(paramValues: any) {
    let params = new HttpParams();
    params = params.append('page', paramValues.page-1);
    params = params.append('size', paramValues.size);
    if(paramValues.sort.length >0) {
      for (let i = 0; i < paramValues.sort.length; ++i) { 
        params = params.append('sort', paramValues.sort[i]);
      }
    }
    params = params.append('search', paramValues.search);
    return lastValueFrom(this.http.get(`product/page`, { params: params }))
      .then(res => res)
      .catch(this.handleError);
  }

  createUpdateProduct(product: Product) {
    return lastValueFrom(this.http.post(`product/`, product))
      .then(res => res)
      .catch(this.handleError);
  }

  deleteProductById(productId: number) {
    return lastValueFrom(this.http.delete(`product/` + productId))
      .then(res => res)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}