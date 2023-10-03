// ./main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { APP_ROUTE } from './app/app.route';
import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTE),
    provideHttpClient(),
    provideAnimations(),
    importProvidersFrom(
      provideFirebaseApp(() =>
        initializeApp({
          apiKey: 'AIzaSyDEpySqtwpRbnv_HEtMlj8JM7qDgV49Sig',
          authDomain: 'movie-search-62fe6.firebaseapp.com',
          projectId: 'movie-search-62fe6',
          storageBucket: 'movie-search-62fe6.appspot.com',
          messagingSenderId: '503461826304',
          appId: '1:503461826304:web:d9a013a8625d37d1152de5',
        })
      )
    ),
    importProvidersFrom(provideAuth(() => getAuth())),
    {
      provide: FIREBASE_OPTIONS,
      useValue: {
        apiKey: 'AIzaSyDEpySqtwpRbnv_HEtMlj8JM7qDgV49Sig',
        authDomain: 'movie-search-62fe6.firebaseapp.com',
        projectId: 'movie-search-62fe6',
        storageBucket: 'movie-search-62fe6.appspot.com',
        messagingSenderId: '503461826304',
        appId: '1:503461826304:web:d9a013a8625d37d1152de5',
      },
    },
    {
      // Remove space underneath mat form field
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        subscriptSizing: 'dynamic',
      },
    },
  ],
}).catch((e) => console.error(e));
