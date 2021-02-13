import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManegmentRoutingModule } from './manegment-routing.module';
import { ManegmentComponent } from './manegment.component';


@NgModule({
  declarations: [ManegmentComponent],
  imports: [
    CommonModule,
    ManegmentRoutingModule
  ],
  exports: [ManegmentComponent]
})
export class ManegmentModule { }
