import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Keyboard } from '@ionic-native/keyboard';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NewLeanCanvasPage } from '../pages/newleancanvas/newleancanvas';
import { NewMvpCanvasPage } from '../pages/newmvpcanvas/newmvpcanvas';
import { NewBmcPage } from '../pages/newbmc/newbmc';
import { PdfPage } from '../pages/pdf/pdf';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Extradata } from '../providers/extradata';
import { SafePipe } from '../pipes/safe';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		NewLeanCanvasPage,
		NewMvpCanvasPage,
		NewBmcPage,
		PdfPage,
		SafePipe
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			config: {
				// These options are available in ionic-angular@2.0.0-beta.2 and up.
				scrollAssist: false,    // Valid options appear to be [true, false]
				autoFocusAssist: false  // Valid options appear to be ['instant', 'delay', false]
			}
		}),
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
		Keyboard,
		StatusBar,
		SplashScreen,
		ScreenOrientation,
		SocialSharing,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		Extradata
	]
})
export class AppModule {}
