import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-purchase-requisition',
  templateUrl: './purchase-requisition.component.html',
  styleUrls: ['./purchase-requisition.component.css']
})
export class PurchaseRequisitionComponent implements OnInit {

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
