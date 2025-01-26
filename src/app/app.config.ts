import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';

import { routes } from './app.routes';
import { counterFeature } from './lazy-feature2/_state';
import { HttpErrorsInterceptor } from './_interceptors/http-errors.interceptor';

export const appConfig: ApplicationConfig = {
    providers: [
        // TODO: check if this can be improved
        importProvidersFrom(
            StoreModule.forRoot({}),
            StoreModule.forFeature(counterFeature)
        ),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(
            routes,
            withPreloading(PreloadAllModules),
            // withDebugTracing(),
        ),
        provideHttpClient(
            withFetch(),
            withInterceptorsFromDi(),
        ),
        {provide: HTTP_INTERCEPTORS, useClass: HttpErrorsInterceptor, multi: true},
        provideClientHydration(),
        provideAnimationsAsync()
    ]
};
