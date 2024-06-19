import { Route } from '@angular/router';

export const routes: Route[] = [
    {
        path: 'lazyFeature',
        title: 'lazyFeature',
        loadComponent: () =>
            import('./lazy-feature/lazy-feature.component')
                .then(m => m.LazyFeatureComponent)
    },
    {
        path: 'lazyFeature2',
        title: 'lazyFeature2',
        loadComponent: () =>
            import('./lazy-feature2/lazy-feature2.component')
                .then(m => m.LazyFeature2Component)
    },
];
