import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListCityRoutingModule } from './list-city-routing.module';
import { ListCityComponent } from './list-city.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AppCoreModule } from "src/app/core/core.module";

const MATERIAL_MODULE=[
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatDialogModule,
];




@NgModule({
  declarations: [ListCityComponent],
  imports: [
    CommonModule,
    ListCityRoutingModule,
    ...MATERIAL_MODULE,
    FormsModule,
    FlexLayoutModule,
    AppCoreModule

    
  ]
})
export class ListCityModule { }
