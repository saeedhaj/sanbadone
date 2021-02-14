import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCityRoutingModule } from './list-city-routing.module';
import { ListCityComponent } from './list-city.component';


@NgModule({
  declarations: [ListCityComponent],
  imports: [
    CommonModule,
    ListCityRoutingModule
  ]
})
export class ListCityModule { }
