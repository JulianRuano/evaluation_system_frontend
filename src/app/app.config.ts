import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptor/auth.interceptor';
import { ErrorInterceptor } from './core/interceptor/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withInterceptors([authInterceptor])),
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ]
};
