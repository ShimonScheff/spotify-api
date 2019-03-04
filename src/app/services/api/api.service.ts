import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) {}


  get(url, headers) {
    return this.httpClient.get(url, {headers});
  }


  post(url, body, headers) {
    return this.httpClient.post(url, body, {headers});
  }

}
