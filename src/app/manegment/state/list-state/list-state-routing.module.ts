import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStateComponent } from "./list-state.component";

const routes: Routes = [{
  path:'',
  component:ListStateComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListStateRoutingModule { }
