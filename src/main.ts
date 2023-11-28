import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environment';

import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  if (environment.production && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/ngsw-worker.js')
      .then((registration) => {
        console.log('Service Worker registrado con éxito:', registration);
      })
      .catch((error) => {
        console.error('Error al registrar el Service Worker:', error);
      });
  }
