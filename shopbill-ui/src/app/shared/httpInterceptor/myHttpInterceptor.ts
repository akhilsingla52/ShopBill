import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, 
    HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from "rxjs/operators";

import { SweetAlertPopUp } from '../../shared/utils/SweetAlertPopUp';
import { APP_URI, ADMIN_URI, OWNER_URI, REST_URI } from '../utils/Const';

@Injectable()
export class MyHttpInterceptor extends SweetAlertPopUp implements HttpInterceptor {

    constructor() { super(); }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({ 
            headers: req.headers.set("Authorization", "auth-token"),
            url: (APP_URI + req.url)
        });
        this.showLoading();
        return next
            .handle(authReq)
            .pipe(
                tap(evt => {
                    this.close();
                    if (evt instanceof HttpResponse) {
                        
                    }
                }),
                catchError((err: any) => {
                    this.close();
                    if(err instanceof HttpErrorResponse) {
                       
                    }
                    return of(err);
                })
            );
            // .do(
            //     (succ: HttpEvent<any>) => {
            //         if(succ instanceof HttpResponse) {
                        
            //         }
            //     },
            //     (err: any) => {
            //         if(err instanceof HttpErrorResponse) {
            //             if(err.status === 401) {
                            
            //             }
            //         }
            //     }
            // );
    }
}