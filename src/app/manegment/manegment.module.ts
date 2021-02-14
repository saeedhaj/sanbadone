import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from "@angular/forms";
import { ManegmentRoutingModule } from './manegment-routing.module';
import { ManegmentComponent } from './manegment.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
// import { HttpModule } from '@angular/core';

const MATERIAL_MODULE=[
    MatSidenavModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule
];  

@NgModule({
  declarations: [ManegmentComponent],
  imports: [
    CommonModule,
    ManegmentRoutingModule,
    ...MATERIAL_MODULE,
    FormsModule,
    FlexLayoutModule,
  ],
  exports: [ManegmentComponent]
})
export class ManegmentModule { }
