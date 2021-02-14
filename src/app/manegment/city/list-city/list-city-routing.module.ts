import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCityComponent } from "./list-city.component";

const routes: Routes = [
  {
    path:'',
    component:ListCityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListCityRoutingModule { }
