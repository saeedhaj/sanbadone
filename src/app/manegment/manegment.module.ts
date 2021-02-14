import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManegmentRoutingModule } from './manegment-routing.module';
import { ManegmentComponent } from './manegment.component';
import { CityModule } from "./city/city.module";


@NgModule({
  declarations: [ManegmentComponent],
  imports: [
    CommonModule,
    ManegmentRoutingModule,
    CityModule
  ],
  exports: [ManegmentComponent]
})
export class ManegmentModule { }
