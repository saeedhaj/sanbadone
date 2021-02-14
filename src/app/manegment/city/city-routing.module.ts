import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityComponent } from "./city.component";

const routes: Routes = [
  {
    path:'',
    component:CityComponent,
    children:[
      {
        path: '',
        redirectTo:'list-city',
      },
      {
        path: 'list-city',
        loadChildren:()=>import('./list-city/list-city.module').then((m)=>m.ListCityModule),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityRoutingModule { }
