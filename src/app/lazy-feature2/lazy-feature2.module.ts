import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { StoreModule } from '@ngrx/store';

import { LazyFeature2RoutingModule } from './lazy-feature2-routing.module';
import { LazyFeature2Component } from './lazy-feature2.component';
import { counterFeature } from './_state';


@NgModule({
    declarations: [
        LazyFeature2Component
    ],
    imports: [
        CommonModule,
        LazyFeature2RoutingModule,
        SharedModule,
        StoreModule.forFeature(counterFeature)
    ]
})
export class LazyFeature2Module { }
