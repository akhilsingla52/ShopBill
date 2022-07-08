import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { OwnerComponent } from '../owner.component'
import { ProductComponent } from '../product/product.component'

import { ProductService } from '../product/product.service'

const ownerRoutes: Routes = [
    { path: 'owner', component: OwnerComponent,
        children: [
            { path: '', redirectTo: 'product', pathMatch: 'full' },
            { path: 'product',  component: ProductComponent },
        ]
    }
];


@NgModule({
    imports: [ RouterModule.forRoot(ownerRoutes, {useHash: false}) ],
    providers: [ 
        ProductService
     ],
    exports: [ RouterModule ]
})

export class OwnerRoutingModule { }

export const ownerComponents = [
    OwnerComponent,
    ProductComponent
];