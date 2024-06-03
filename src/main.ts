import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { worker } from './mocks/browser';
import { environment } from '@env/environment';
import { AppModule } from './app/app.module';

async function enableMocking() {
    if (environment.production) {
        return;
    }

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start();
}

// worker.start().then(
//     () => {
//         platformBrowserDynamic().bootstrapModule(AppModule)
//             .catch(err => console.error(err));
//     }
// );

enableMocking().then(
    () => {
        platformBrowserDynamic().bootstrapModule(AppModule)
            .catch(err => console.error(err));
    }
);
