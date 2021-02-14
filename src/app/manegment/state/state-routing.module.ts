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
       {
         path: 'add-state',
         loadChildren:()=>import('./add-state/add-state.module').then((m)=>m.AddStateModule),
       },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StateRoutingModule { }
