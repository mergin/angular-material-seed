import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';

import { LazyFeatureRoutingModule } from './lazy-feature-routing.module';
import { LazyFeatureComponent } from './lazy-feature.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
    declarations: [
        LazyFeatureComponent
    ],
    imports: [
        CommonModule,
        LazyFeatureRoutingModule,
        NgOptimizedImage,
        SharedModule
    ]
})
export class LazyFeatureModule { }
