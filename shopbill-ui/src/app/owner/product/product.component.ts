import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service';
import { CodeService } from '../../admin/code/code.service';
import { SweetAlertPopUp } from '../../shared/utils/SweetAlertPopUp';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Product } from '../../shared/models/Product'
import { CommonCode } from '../../shared/models/CommonCode';
import { UNIT_TYPE } from '../../Shared/utils/Const';

declare var $: any;

@Component({
    selector: 'product',
    templateUrl: './product.view.html',
})

export class ProductComponent extends SweetAlertPopUp implements OnInit {
    form: FormGroup;
    products: Product[] = [];
    unitTypes: CommonCode[] = [];
    model_header: string;
    params: any;
    headElements: any;

    constructor(private router: Router,
        private productService: ProductService,
        private codeService: CodeService) { super(); }

    ngOnInit() {
        this.params = {
            page: 1,
            size: 10,
            sort: 'code',
            search: '',
            totalElements: 0
        };
        this.headElements = [{
            element: 'Code',
            sort:'code'
        }, { 
            element: 'Name', 
            sort:'name'
        }, { 
            element: 'HSN code', 
            sort:'hsnCode'
        }, {
            element: 'Unit', 
            sort:'unit'
        }, {
            element: 'Unit Type', 
            sort:'unitType.messageEn'
        }, {
            element: 'Price', 
            sort:'price'
        }, {
            element: 'Created By',
            sort:'crtId' 
        }, {
            element: 'Created Date',
            sort:'crtDtm'
        }];
        this.formValidations();
        this.getProductList();
    }
    
    get f(){
        return this.form.controls;
    }
    
    getControls(key: string){
        return this.form.get(key);
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
        if(this.params.sort === sort) {
            this.params.sort += ',desc';
        } else {
            this.params.sort = sort;
        }
        this.getProductList();
    }

    getProductList() {
        this.showLoading();

        this.productService.getProductList(this.params)
            .then(
                success => {
                    this.close();
                    this.params.totalElements = success.totalElements;
                    this.products = success.content as Product[];
                }, error => {
                    this.close();
                    this.errorPopUp();
                }
            );

        this.form.reset();
    }

    getUnitTypes() {
        this.showLoading();

        this.codeService.getCodeListByParentCodeKey(UNIT_TYPE)
            .then(
                success => {
                    this.close();
                    this.unitTypes = success as CommonCode[];
                }, error => {
                    this.close();
                    this.errorPopUp();
                }
            );
    }

    openAddModel() {
        this.setModelValue("Add");
    }

    openUpdateModel(product: any) {
        this.setModelValue("Update");
        this.form.patchValue(product);
    }

    setModelValue(model_header: string) {
        this.model_header = model_header;
        this.getUnitTypes();
        this.form.reset();
    }

    closeModel() {
        this.form.reset();
        $("#addUpdateModel").modal("hide");
    }

    createUpdateProduct() {
        this.productService.createUpdateProduct(this.form.value)
            .then(
                success => {
                    this.closeModel();
                    this.successPopUp("Product Added");
                    this.getProductList();
                }, error => {
                    this.errorPopUp();
                }
            );
    }

    deleteProductById(product: Product, index: number) {
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