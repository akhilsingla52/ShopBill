import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'ShopBill';

  ngOnInit() {
    $('body').bind('copy paste cut',function(e) {
        e.preventDefault(); return false; 
    });
  }
}
