import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { PreloadAllModules, provideRouter, withDebugTracing, withPreloading } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { counterFeature } from './lazy-feature2/_state';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

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
        provideHttpClient(withFetch()),
        provideClientHydration(),
        provideAnimationsAsync()
    ]
};
