import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  provideClientHydration(),
  importProvidersFrom(AngularFireModule.initializeApp({
    "projectId": "vizora-weboldal",
    "appId": "1:440355443959:web:be3aa20368776e9888eff2",
    "storageBucket": "vizora-weboldal.appspot.com",
    "apiKey": "AIzaSyCUx3JOD85W5jcnPUFnE2B6T8LFcsRxRiE",
    "authDomain": "vizora-weboldal.firebaseapp.com",
    "messagingSenderId": "440355443959",
    "measurementId": "G-7V2MHBGKWE"
  })),
  importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),
  importProvidersFrom(provideStorage(() => getStorage()))
  ]
};
