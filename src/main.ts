import { bootstrapApplication } from '@angular/platform-browser';
import { environment } from '@env/environment';
import { AppComponent } from '@app/app.component';
import { appConfig } from '@app/app.config';
import { worker } from './mocks/browser';

async function enableMocking() {
    if (environment.production) {
        return;
    }

    // `worker.start()` returns a Promise that resolves
    // once the Service Worker is up and ready to intercept requests.
    return worker.start();
}

enableMocking().then(
    () => {
        bootstrapApplication(AppComponent, appConfig)
            .catch((err) => console.error(err));
    }
);
