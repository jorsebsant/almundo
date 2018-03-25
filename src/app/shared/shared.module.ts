import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HotelCardComponent
  ],
  declarations: [HotelCardComponent, HeaderComponent]
})
export class SharedModule { }
