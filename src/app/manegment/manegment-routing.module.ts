import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManegmentComponent } from "./manegment.component";

const routes: Routes = [
  {
    path:'',
    component:ManegmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManegmentRoutingModule { }
