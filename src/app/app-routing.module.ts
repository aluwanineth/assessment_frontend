import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParkRunnerComponent } from './park-runner/park-runner.component';


const routes: Routes = [
  {
      path: 'parkrunner',
      component: ParkRunnerComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
