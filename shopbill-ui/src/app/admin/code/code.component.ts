import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CodeService } from './code.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { BaseComponent, CommonCode } from '../../shared/models/models';

@Component({
    selector: 'common-code',
    templateUrl: './code.view.html',
    styleUrls: ['./code.view.scss']
})

export class CodeComponent extends BaseComponent implements OnInit {

    form: FormGroup;
    codes: CommonCode[] = [];

    constructor(private router: Router, private codeService: CodeService) { super(); }

    ngOnInit() {
        this.getCodeList();
    }

    getCodeList() {
        this.codeService.getCodeList()
            .then(
                success => {
                    this.codes = success as CommonCode[];
                    console.log(this.codes);
                }, error => {
                    this.errorPopUp();
                }
            );

        this.form.reset();
    }
}