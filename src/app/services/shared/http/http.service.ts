import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  URL_JSON_DATA_SERVER = 'localhost/3000';
  constructor() { }

  getBaseURL(): string {
    return this.URL_JSON_DATA_SERVER;
  }
}
