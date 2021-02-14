import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCityRoutingModule } from './list-city-routing.module';
import { ListCityComponent } from './list-city.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { FormsModule } from "@angular/forms";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";



const MATERIAL_MODULE=[
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatDialogModule
];

@NgModule({
  declarations: [ListCityComponent],
  imports: [
    CommonModule,
    ListCityRoutingModule,
    ...MATERIAL_MODULE,
    FormsModule,
    FlexLayoutModule,
    
  ]
})
export class ListCityModule { }
