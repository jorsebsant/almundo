import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HotelCardComponent } from './components/hotel-card/hotel-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    HeaderComponent,
    HotelCardComponent,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [HotelCardComponent, HeaderComponent]
})
export class SharedModule { }
