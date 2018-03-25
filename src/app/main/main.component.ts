import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../core/services/hotels.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public hotels;
  constructor(
    private hotelService: HotelsService
  ) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(response => {
      this.hotels = response;
    });
  }

}
