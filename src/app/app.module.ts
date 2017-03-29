import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AuthService } from '../providers/auth-service'
import { MenuService } from '../providers/menu-service'
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { AddPage } from '../pages/add/add';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

export const firebaseConfig = {
  apiKey: "AIzaSyCT7pnrym4fFW4J26KDwemUeS8D2WputuY",
  authDomain: "readsmart-d608a.firebaseapp.com",
  databaseURL: "https://readsmart-d608a.firebaseio.com",
  storageBucket: "readsmart-d608a.appspot.com",
  messagingSenderId: "765022860744"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    AddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    AddPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    MenuService
  ]
})
export class AppModule {}
