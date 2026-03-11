import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import { MyThemePreset } from 'ui-kit';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    providePrimeNG({
      theme: {
        preset: MyThemePreset,
        options: {
          darkModeSelector: '.my-app-dark', // Optional: for dark mode toggle
        },
      },
    }),
  ],
};
