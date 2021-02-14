import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStateRoutingModule } from './add-state-routing.module';
import { AddStateComponent } from './add-state.component';


@NgModule({
  declarations: [AddStateComponent],
  imports: [
    CommonModule,
    AddStateRoutingModule
  ]
})
export class AddStateModule { }
