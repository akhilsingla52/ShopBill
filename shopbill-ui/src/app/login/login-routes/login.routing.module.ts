import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from '../login.component'

import { LoginService } from '../login.service'

const loginRoutes: Routes = [
    {   path: 'login',  component: LoginComponent   },
    {   path: '',   redirectTo: '/login',   pathMatch: 'full'   },
];


@NgModule({
    imports: [ RouterModule.forRoot(loginRoutes, {useHash: false}) ],
    providers: [ 
        LoginService
     ],
    exports: [ RouterModule ]
})

export class LoginRoutingModule { }

export const loginComponents = [
    LoginComponent
];