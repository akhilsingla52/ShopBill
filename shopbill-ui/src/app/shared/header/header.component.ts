import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'header',
    templateUrl: './header.view.html',
    styleUrls: ['./header.view.scss']
})

export class HeaderComponent implements OnInit {

    constructor(private router:Router) { }

    ngOnInit() {
    }

    logout() {
        this.router.navigate(['login']);
    }
}