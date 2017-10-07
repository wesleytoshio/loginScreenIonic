import { AnimaProvider } from './../providers/anima/anima';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { PasswordMatchProvider } from '../providers/password-match/password-match';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      pageTransition:"md-transition"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AnimaProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PasswordMatchProvider
  ]
})
export class AppModule {}
