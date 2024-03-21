import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyFeature2Component } from './lazy-feature2.component';

const routes: Routes = [{ path: '', component: LazyFeature2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyFeature2RoutingModule { }
