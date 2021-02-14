import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StateComponent } from "./state.component";

const routes: Routes = [
  {
    path:'',
    component:StateComponent,
    children:[
      {
        path: '',
        redirectTo:'list-state',
      },
      {
        path: 'list-state',
        loadChildren:()=>import('./list-state/list-state.module').then((m)=>m.ListStateModule),
      },
      // {
      //   path: 'add-city',
      //   loadChildren:()=>import('./add-city/add-city.module').then((m)=>m.AddCityModule),
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
