import { Component, OnInit, Input } from '@angular/core';
import { Hotel } from '../../model/hotel';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() hotel: Hotel;
  stars;

  constructor() { }

  ngOnInit() {
    this.stars = Array(this.hotel.stars).fill(0).map((x, i) => i);
  }

}
