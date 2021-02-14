import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city-routing.module';
import { CityComponent } from './city.component';
import { ListCityModule } from "./list-city/list-city.module";


@NgModule({
  declarations: [CityComponent],
  imports: [
    CommonModule,
    CityRoutingModule,
    ListCityModule
  ]
})
export class CityModule { }
