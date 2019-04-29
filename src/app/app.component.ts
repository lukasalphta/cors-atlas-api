import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cors-atlas';
  apiKey = 'xxx';

  constructor(private httpClient: HttpClient) {
    const headers = new HttpHeaders().set('x-origin', '1');

    const httpOptions = {
      headers
    };
    this.httpClient
    .get('https://atlas.microsoft.com/search/address/structured/json?subscription-key='+ this.apiKey +'&api-version=1.0&countryCode=it&postalCode=00012', httpOptions)
    .subscribe();
  }
}
