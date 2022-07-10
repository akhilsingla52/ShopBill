import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from './user.service';
import { CodeService } from '../../admin/code/code.service';

import { BaseComponent, User, CommonCode, USER_TYPE } from '../../shared/models/models';

@Component({
    selector: 'user',
    templateUrl: './user.view.html',
})
export class UserComponent extends BaseComponent implements OnInit {
    users: User[] = [];
    userTypes: CommonCode[] = [];
    user: User;

    constructor(private router: Router,
        private userService: UserService,
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
        },  {
            element: 'Type', 
            sort:'type.messageEn'
        }, {
            element: 'Balance', 
            sort:'balance'
        }];
        this.formValidations();
        this.getUserPage();
    }

    formValidations() {
        this.form = new FormGroup({
            id: new FormControl(''),
            delYn: new FormControl(''),
            type: new FormGroup({
                codeKey: new FormControl('', {
                    validators: Validators.required,
                    updateOn: 'change'
                })
            }),
            code: new FormControl('', {
                validators: Validators.required,
                updateOn: 'change'
            }),
            name: new FormControl('', {
                validators: Validators.required,
                updateOn: 'change'
            }),
            balance: new FormControl(0, {
                validators: Validators.required,
                updateOn: 'change'
            }),
            mobile: new FormControl(0, {
                validators: Validators.required,
                updateOn: 'change'
            }),
            phone: new FormControl(0),
            email: new FormControl(''),
            address: new FormControl(''),
            gstin: new FormControl(''),
            pan: new FormControl(''),
            state: new FormControl(''),
            stateCode: new FormControl(''),
            pinCode: new FormControl(0),
            remark: new FormControl(''),
        });
    }

    orderBy(sort: string) {
        if(this.params.sort.length > 0
            && this.params.sort[0] === sort) {
            this.params.sort[0] = sort+',desc';
        } else {
            this.params.sort[0] = sort;
        }
        this.getUserPage();
    }

    getUserPage() {
        this.userService.getUserPage(this.params)
            .then(
                success => {
                    this.params.totalElements = success.totalElements;
                    this.users = success.content as User[];
                }, error => {
                    this.errorPopUp();
                }
            );

        this.form.reset();
    }

    getUserTypes() {
        this.codeService.getCodeListByParentCodeKey(USER_TYPE)
            .then(
                success => {
                    this.userTypes = success as CommonCode[];
                }, error => {
                    this.errorPopUp();
                }
            );
    }

    openAddModel() {
        this.openModel("Add");
        this.getUserTypes();
    }

    openUpdateModel(user: any) {
        this.openModel("Update");
        this.getUserTypes();
        this.form.patchValue(user);
    }

    createUpdateUser() {
        this.userService.createUpdateUser(this.form.value)
            .then(
                success => {
                    this.closeModel("#addUpdateModel");
                    this.successPopUp("User Added");
                    this.getUserPage();
                }, error => {
                    this.errorPopUp();
                }
            );
    }

    deleteUserById(user: User, index: number) {
        this.userService.deleteUserById(user.id)
            .then(
                success => {
                    user.delYn = 'Y';
                    this.successPopUp("User Deleted");
                }, error => {
                    this.errorPopUp();
                }
            );
    }

    activateUser(user: User) {
        user.delYn = 'N';
        this.userService.createUpdateUser(user)
            .then(
                success => {
                    this.successPopUp("User Activated");
                }, error => {
                    user.delYn = 'Y';
                    this.errorPopUp();
                }
            );
    }
}