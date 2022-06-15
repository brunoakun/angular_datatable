import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  dtOptions: any = {};
  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('https://jsonplaceholder.typicode.com/comments/').subscribe(data => {
      this.data = data;
    });


    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Blfrtip',
      buttons: [{
        extend: 'collection',
        text: 'Export Data',
        className: 'exp_d_btn',

        buttons: [{
          extend: 'excel',
          text: '<img src="https://w7.pngwing.com/pngs/924/424/png-transparent-microsoft-excel-spreadsheet-microsoft-powerpoint-microsoft-angle-text-rectangle.png" width="24">&nbsp; XLS',
          exportOptions: {
            columns: ':visible'
          }
        },
        {
          extend: 'pdf',
          text: '<img src="assets/images/pdf-mis.png" width="24"> &nbsp;PDF',
          exportOptions: {
            columns: ':visible'
          },
          orientation: 'landscape'
        },
        {
          extend: 'csv',
          text: '<img src="assets/images/csv.png" width="24">&nbsp; CSV',
          exportOptions: {
            columns: ':visible'
          }
        },

        ]
      }

      ]
    };


  }

  dtTrigger(){
    
  }

}
