import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, 
    HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from "rxjs/operators";

import Swal from 'sweetalert2';
import { APP_URI, REST_URI } from '../utils/Const';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authReq = req.clone({ 
            headers: req.headers.set("Authorization", "auth-token"),
            url: (APP_URI + REST_URI + req.url)
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
    }

    public showLoading() {
        Swal.fire({
            title: 'Loading...',
            allowOutsideClick: false,
            allowEscapeKey: false
        });
        Swal.showLoading();
    }

    public close() {
        Swal.close();
    }

}