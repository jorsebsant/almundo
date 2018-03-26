import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Constants } from '../../shared/model/constants';
import { environment } from 'environments/environment';

@Injectable()
export class HotelsService {

  constructor(
    private http: HttpClient
  ) { }

  getHotels() {
    return this.http.get(`${environment.baseUrl}/${Constants.hotelEntity}`);
  }

  searchHotelByName(name) {
    return this.http.get(`${environment.baseUrl}/${Constants.hotelEntity}/${Constants.searchEndpoint}?name=${name}`);
  }

}
