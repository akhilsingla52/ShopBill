import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeService } from './code.service';
import { SweetAlertPopUp } from '../../shared/utils/SweetAlertPopUp';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CommonCode } from '../../shared/models/CommonCode'

@Component({
    selector: 'common-code',
    templateUrl: './code.view.html',
    styleUrls: ['./code.view.scss']
})

export class CodeComponent extends SweetAlertPopUp implements OnInit {

    form: FormGroup;
    codes: CommonCode[] = [];

    constructor(private router: Router, private codeService: CodeService) { super(); }

    ngOnInit() {
        this.getCodeList();
    }

    getCodeList() {
        this.showLoading();

        this.codeService.getCodeList()
            .then(
                success => {
                    this.close();
                    this.codes = success as CommonCode[];
                    console.log(this.codes);
                }, error => {
                    this.close();
                    this.errorPopUp();
                }
            );

        this.form.reset();
    }
}