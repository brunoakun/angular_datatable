import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'datatable';
  data: any;
  constructor(private http: HttpClient) {
    //get request from web api
    this.http.get('https://jsonplaceholder.typicode.com/comments/').subscribe(data => {

      this.data = data;
      setTimeout(() => {
        $('#datatableexample').DataTable({

          dom: 'Bfrtip',

          pagingType: 'full_numbers',
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25],

          // Idioma
          language: {
            url: 'https://cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json'
          },
 
          
           
        }
        );
      }, 1);
    }, error => console.error(error));


  }

} 

