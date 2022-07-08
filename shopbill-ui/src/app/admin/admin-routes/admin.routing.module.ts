import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AdminComponent } from '../admin.component'
import { CodeComponent } from '../code/code.component'

import { CodeService } from '../code/code.service'

const adminRoutes: Routes = [
    { path: 'admin', component: AdminComponent,
        children: [
            { path: '', redirectTo: 'code', pathMatch: 'full' },
            { path: 'code',  component: CodeComponent },
        ]
    }
];


@NgModule({
    imports: [ RouterModule.forRoot(adminRoutes, {useHash: false}) ],
    providers: [ 
        CodeService
     ],
    exports: [ RouterModule ]
})

export class AdminRoutingModule { }

export const adminComponents = [
    AdminComponent,
    CodeComponent
];