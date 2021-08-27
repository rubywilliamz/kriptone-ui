import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-register',
  templateUrl: './vendor-register.component.html',
  styleUrls: ['./vendor-register.component.css']
})
export class VendorRegisterComponent implements OnInit {

  constructor() {
    this.setThemeVersion();
   }

  ngOnInit(): void {
  }
  setThemeVersion() {
    document.body.setAttribute('data-theme-version', 'dark');
  }

  ngOnDestroy(): void {
    document.body.setAttribute('data-theme-version', 'light');
    
  }
}
