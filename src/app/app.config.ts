import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',  // Corrigido para 'enabled' (ao invés de 'enable')
        anchorScrolling: 'enabled' // Habilitando o scrolling para fragmentos
      })
    ),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideClientHydration()
  ]
};
