import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { AccountPage } from './pages/account/account';
import { DashboardPage } from './pages/dashboard/dashboard';
import { DevicesPage } from './pages/devices/devices';
import { HistoricalDataPage } from './pages/historical-data/historical-data';
import { LoginPage } from './pages/login/login';
import { SettingsPage } from './pages/settings/settings';
import { VerifyHuePage } from './pages/verify-hue/verify-hue';

import { UserData } from './providers/user-data';

import {FIREBASE_PROVIDERS, AuthMethods, AuthProviders, defaultFirebase, FirebaseAuth, firebaseAuthConfig} from 'angularfire2';


@Component({
  templateUrl: 'build/app.html',
  providers: [UserData]
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = VerifyHuePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public auth: FirebaseAuth, public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Dashboard', component: DashboardPage, icon: 'speedometer' },
      { title: 'Verify Install', component: DevicesPage, icon: 'checkmark-circle-outline' },
      { title: 'Alert Setup', component: SettingsPage, icon: 'alert' },
      { title: 'Historical Data', component: HistoricalDataPage, icon: 'stats' },
      { title: 'Account', component: AccountPage, icon: 'contact' }
    ];

  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logOut() {
    this.auth.logout();
    this.nav.setRoot( LoginPage )
  }
}

ionicBootstrap(MyApp, [FIREBASE_PROVIDERS, defaultFirebase({
  apiKey: "AIzaSyAtgJA_tMnVlyP0fw41BZALQ7jBx9c4nEs",
  authDomain: "homeclub2-cd98f.firebaseapp.com",
  databaseURL: "https://homeclub2-cd98f.firebaseio.com",
  storageBucket: ""
}), firebaseAuthConfig({
  provider: AuthProviders.Password,
  method: AuthMethods.Password
})]);
