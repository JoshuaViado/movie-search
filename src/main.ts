// ./main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './app/app.route';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTE),
    provideAnimations(),
    {
      // Remove space underneath mat form field
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic',
      },
    },
  ],
}).catch((e) => console.error(e));
