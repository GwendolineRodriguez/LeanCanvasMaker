import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewLeanCanvasPage } from '../pages/newleancanvas/newleancanvas';
import { NewMvpCanvasPage } from '../pages/newmvpcanvas/newmvpcanvas';
import { NewBmcPage } from '../pages/newbmc/newbmc';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		NewLeanCanvasPage,
		NewMvpCanvasPage,
		NewBmcPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		NewLeanCanvasPage,
		NewMvpCanvasPage,
		NewBmcPage,
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler}
	]
})
export class AppModule {}
