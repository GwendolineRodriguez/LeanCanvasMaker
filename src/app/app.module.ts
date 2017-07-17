import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewLeanCanvasPage } from '../pages/newleancanvas/newleancanvas';
import { NewMvpCanvasPage } from '../pages/newmvpcanvas/newmvpcanvas';
import { NewBmcPage } from '../pages/newbmc/newbmc';
import { PdfPage } from '../pages/pdf/pdf';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DocumentViewer } from '@ionic-native/document-viewer';
import { Extradata } from '../providers/extradata';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		NewLeanCanvasPage,
		NewMvpCanvasPage,
		NewBmcPage,
		PdfPage,
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
		PdfPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		DocumentViewer,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		Extradata
	]
})
export class AppModule {}
