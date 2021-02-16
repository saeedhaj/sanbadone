import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CoreComponent } from './core.component';
import { DataTableModule } from "./data-table/data-table.module";

@NgModule({
  declarations: [CoreComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    DataTableModule
  ] ,
  exports: [DataTableModule] 
})
export class AppCoreModule { }
