import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { HotelsService } from '../core/services/hotels.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public hotels;
  public searchForm;
  constructor(
    private hotelService: HotelsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.getHotels();
    this.buildForm();
  }

  onSubmit() {
   const name = this.searchForm.get('name').value;
   this.hotelService.searchHotelByName(name).subscribe(response => {
     this.hotels = response;
   });
  }

  private buildForm() {
    this.searchForm = this.formBuilder.group({
      name: ['']
    });
  }

  private getHotels() {
    this.hotelService.getHotels().subscribe(response => {
      this.hotels = response;
    });
  }

}
