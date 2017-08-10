import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Keyboard } from '@ionic-native/keyboard';
import { File } from '@ionic-native/file';

import { LeanCanvasMaker } from './app.component';
import { HomePage } from '../pages/home/home';
import { CanvaPage } from '../pages/canva/canva';
import { PdfPage } from '../pages/pdf/pdf';
import { CompanyForm } from '../pages/companyform/companyform';
import { InfoPage } from '../pages/info/info';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Extradata } from '../providers/extradata';
import { Canvadata } from '../providers/canvadata';
import { SafePipe } from '../pipes/safe';
import { ContentDrawer } from '../components/content-drawer/content-drawer';
import { MvpCards } from '../providers/mvpcards';

@NgModule({
	declarations: [
		LeanCanvasMaker,
		HomePage,
		CanvaPage,
		PdfPage,
		InfoPage,
		CompanyForm,
		SafePipe,
		ContentDrawer
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(LeanCanvasMaker, {
			config: {
				// These options are available in ionic-angular@2.0.0-beta.2 and up.
				scrollAssist: false,    // Valid options appear to be [true, false]
				autoFocusAssist: false  // Valid options appear to be ['instant', 'delay', false]
			}
		}),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		LeanCanvasMaker,
		HomePage,
		CanvaPage,
		PdfPage,
		InfoPage,
		CompanyForm
	],
	providers: [
		Keyboard,
		StatusBar,
		SplashScreen,
		ScreenOrientation,
		SocialSharing,
		File,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
		Extradata,
		Canvadata,
		MvpCards
	]
})
export class AppModule {}
