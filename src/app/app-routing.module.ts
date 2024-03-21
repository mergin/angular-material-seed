import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: 'lazyFeature',
    loadChildren: () => import('./lazy-feature/lazy-feature.module').then(m => m.LazyFeatureModule)
},
{
    path: 'lazyFeature2',
    loadChildren: () => import('./lazy-feature2/lazy-feature2.module').then(m => m.LazyFeature2Module)
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
