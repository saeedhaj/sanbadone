import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManegmentComponent } from "./manegment.component";

const routes: Routes = [
  {
    path:'',
    component:ManegmentComponent,
    children:[
      {
        path: '',
        redirectTo:'city',
      },
      {
        path: 'city',
        loadChildren:()=>import('./city/city.module').then((m)=>m.CityModule),
      },
      // {
      //   path: 'roles',
      //   loadChildren:()=>import('./roles/roles.module').then((m)=>m.RolesModule),
      // },

      // {
      //   path: 'sponsors',
      //   loadChildren:()=>import('./sponsors/sponsors.module').then((m)=>m.SponsorsModule),
      // },
      // {
      //   path: 'events',
      //   loadChildren:()=>import('./events/events.module').then((m)=>m.EventsModule),
      // },
      // {
      //   path: 'calendars',
      //   loadChildren:()=>import('./calendars/calendars.module').then((m)=>m.CalendarsModule),
      // },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManegmentRoutingModule { }
