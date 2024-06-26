import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from './environment';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
  importProvidersFrom(AngularFireModule.initializeApp(environment.firebase)),
  importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())),
  importProvidersFrom(provideStorage(() => getStorage())), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),
  ]
};
