import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HotelsService {

  constructor(
    private http: HttpClient
  ) { }

  getHotels() {
    return this.http.get('assets/mocks/data.json');
  }

}
