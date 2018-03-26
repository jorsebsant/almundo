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
   const stars = this.getStars();
   this.hotelService.searchHotelByCriteria(name, stars).subscribe(response => {
     this.hotels = response;
   });
  }

  onChange($event) {
    const element = $event.srcElement;
    const name = this.searchForm.get('name').value;
    const checkboxes = document.querySelectorAll(`#stars-form input:not([class="${element.className}"])`);
    for (let  i = 0; i < checkboxes.length; i++) {
        checkboxes[i]['checked'] = false;
    }
    this.hotelService.searchHotelByCriteria(name, element.value).subscribe(response => {
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

  private getStars() {
    return document.querySelectorAll('#stars-form input:checked')[0]['value'];
  }

}
