import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  create(data:any) {
    console.log(data);
    //alert("in service");
    return this.http.post(baseUrl, data);
  }

  getAll() {
    return this.http.get(baseUrl);
  }

}