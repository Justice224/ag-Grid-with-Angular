import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agGrid-demo';

  rowData: any;
  @ViewChild('agGrid', {static: false}) agGrid: AgGridAngular | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("assets/data.json").subscribe(data => {
      this.rowData = data
    });
  }

     // =========== BASIC DEMO ==============

  columnDefs = [
    // sorting, groupings and other operations are done on the column headers
    { headerName: 'Make', field: 'make',
      sortable: true,
      filter: true,
      checkboxSelection: true,
      width: 50
    },
    { headerName: 'Model', field: 'model', sortable: true, filter: true},
    { headerName: 'Price', field: 'price', sortable: true, filter: true},
  ]

  // =========== END OF BASIC DEMO ==============


}
