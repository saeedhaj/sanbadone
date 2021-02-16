import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListStateRoutingModule } from './list-state-routing.module';
import { ListStateComponent } from './list-state.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from "@angular/forms";
import { AppCoreModule } from "src/app/core/core.module";

const MATERIAL_MODULE=[
  MatSidenavModule,
  MatButtonModule,
  MatMenuModule,
  MatDialogModule
];  

@NgModule({
  declarations: [ListStateComponent],
  imports: [
    CommonModule,
    ListStateRoutingModule,
    ...MATERIAL_MODULE,
    FormsModule,
    FlexLayoutModule,
    AppCoreModule
  ]
})
export class ListStateModule { }
