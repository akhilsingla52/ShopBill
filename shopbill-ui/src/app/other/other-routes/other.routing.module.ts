import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { OtherComponent } from '../other.component';
import { ProductComponent } from '../product/product.component';
import { UserComponent } from '../user/user.component';

import { ProductService } from '../product/product.service';
import { UserService } from '../user/user.service';

const ownerRoutes: Routes = [
    { path: '', component: OtherComponent,
        children: [
            { path: '', redirectTo: 'user', pathMatch: 'full' },
            { path: 'product',  component: ProductComponent },
            { path: 'user',  component: UserComponent },
        ]
    }
];


@NgModule({
    imports: [ RouterModule.forRoot(ownerRoutes, {useHash: false}) ],
    providers: [ 
        ProductService,
        UserService
     ],
    exports: [ RouterModule ]
})

export class OtherRoutingModule { }

export const otherComponents = [
    OtherComponent,
    ProductComponent,
    UserComponent
];