import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandomComponent } from './random/random.component';
import {ProjectITemComponent} from './projectITem/projectITem.component'


const routes: Routes = [
  { path: 'Random', component: RandomComponent },
  { path: 'ProjectITem', component: ProjectITemComponent },
  { path: '**', component:RandomComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


