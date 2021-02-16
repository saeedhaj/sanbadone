import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddStateRoutingModule } from './add-state-routing.module';
import { AddStateComponent } from './add-state.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

const MATERIAL_MODULE=[
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule

];

@NgModule({
  declarations: [AddStateComponent],
  imports: [
    CommonModule,
    AddStateRoutingModule,
    ...MATERIAL_MODULE,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AddStateModule { }
