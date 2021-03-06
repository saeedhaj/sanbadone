import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCityRoutingModule } from './add-city-routing.module';
import { AddCityComponent } from './add-city.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const MATERIAL_MODULE=[
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
];  

@NgModule({
  declarations: [AddCityComponent],
  imports: [
    CommonModule,
    AddCityRoutingModule,

    ...MATERIAL_MODULE,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class AddCityModule { }
