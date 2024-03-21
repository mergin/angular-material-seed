import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyFeature2RoutingModule } from './lazy-feature2-routing.module';
import { LazyFeature2Component } from './lazy-feature2.component';
import { SharedModule } from '@app/shared/shared.module';


@NgModule({
    declarations: [
        LazyFeature2Component
    ],
    imports: [
        CommonModule,
        LazyFeature2RoutingModule,
        SharedModule
    ]
})
export class LazyFeature2Module { }
