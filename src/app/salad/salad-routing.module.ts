import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaladComponent } from './salad.component';

const routes: Routes = [
  {path: '', component: SaladComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaladRoutingModule { }
