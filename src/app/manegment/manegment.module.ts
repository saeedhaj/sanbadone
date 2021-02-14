import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManegmentRoutingModule } from './manegment-routing.module';
import { ManegmentComponent } from './manegment.component';
import { CityModule } from "./city/city.module";
import { StateModule } from "./state/state.module";


@NgModule({
  declarations: [ManegmentComponent],
  imports: [
    CommonModule,
    ManegmentRoutingModule,
    CityModule,
    StateModule
  ],
  exports: [ManegmentComponent]
})
export class ManegmentModule { }
