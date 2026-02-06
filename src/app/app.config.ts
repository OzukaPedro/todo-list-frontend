import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { API_URL } from './core/tokens/api-url.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: API_URL,
      useValue: 'http://localhost:3000'
    },
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes)
  ]
};
