import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProductService } from './product.service';
import { CodeService } from '../../admin/code/code.service';

import { BaseComponent, Product, CommonCode, UNIT_TYPE } from '../../shared/models/models';

@Component({
    selector: 'product',
    templateUrl: './product.view.html',
})
export class ProductComponent extends BaseComponent implements OnInit {
    products: Product[] = [];
    unitTypes: CommonCode[] = [];
    product: Product;

    constructor(private router: Router,
        private productService: ProductService,
        private codeService: CodeService) { super(); }

    ngOnInit() {
        this.setParams();
        this.params.sort[0] = 'code';
        this.headElements = [{
            element: 'Code',
            sort:'code'
        }, { 
            element: 'Name', 
            sort:'name'
        }, {
            element: 'Stock', 
            sort:'unitType.messageEn,unit'
        }];
        this.formValidations();
        this.getProductList();
    }

    formValidations() {
        this.form = new FormGroup({
            id: new FormControl(''),
            delYn: new FormControl(''),
            code: new FormControl('', {
                validators: Validators.required,
                updateOn: 'change'
            }),
            name: new FormControl('', {
                validators: Validators.required,
                updateOn: 'change'
            }),
            hsnCode: new FormControl('', {
                validators: Validators.required,
                updateOn: 'change'
            }),
            unit: new FormControl(0, {
                validators: Validators.required,
                updateOn: 'change'
            }),
            unitType: new FormGroup({
                codeKey: new FormControl('', {
                    validators: Validators.required,
                    updateOn: 'change'
                })
            }),
            price: new FormControl(0, {
                validators: Validators.required,
                updateOn: 'change'
            }),
        });
    }

    orderBy(sort: string) {
        if(this.params.sort.length > 0
            && this.params.sort[0] === sort) {
            if(this.params.sort[0] === 'unitType.messageEn,unit') {
                this.params.sort[0] = 'unitType.messageEn,desc';
                this.params.sort[1] = 'unit,desc';
            } else {
                this.params.sort[0] = sort+',desc';
            }
        } else {
            if(this.params.sort.length>1) {
                this.params.sort.splice(1,1);
            }
            this.params.sort[0] = sort;
        }
        this.getProductList();
    }

    getProductList() {
        this.productService.getProductList(this.params)
            .then(
                success => {
                    this.params.totalElements = success.totalElements;
                    this.products = success.content as Product[];
                }, error => {
                    this.errorPopUp();
                }
            );

        this.form.reset();
    }

    getUnitTypes() {
        this.codeService.getCodeListByParentCodeKey(UNIT_TYPE)
            .then(
                success => {
                    this.unitTypes = success as CommonCode[];
                }, error => {
                    this.errorPopUp();
                }
            );
    }

    openAddModel() {
        this.openModel("Add");
        this.getUnitTypes();
    }

    openUpdateModel(product: any) {
        this.openModel("Update");
        this.getUnitTypes();
        this.form.patchValue(product);
    }

    createUpdateProduct() {
        this.productService.createUpdateProduct(this.form.value)
            .then(
                success => {
                    this.closeModel("#addUpdateModel");
                    this.successPopUp("Product Added");
                    this.getProductList();
                }, error => {
                    this.errorPopUp();
                }
            );
    }

    deleteProductById(product: Product) {
        this.productService.deleteProductById(product.id)
            .then(
                success => {
                    product.delYn = 'Y';
                    this.successPopUp("Product Deleted");
                }, error => {
                    this.errorPopUp();
                }
            );
    }

    activateProduct(product: Product) {
        product.delYn = 'N';
        this.productService.createUpdateProduct(product)
            .then(
                success => {
                    this.successPopUp("Product Activated");
                }, error => {
                    product.delYn = 'Y';
                    this.errorPopUp();
                }
            );
    }
}