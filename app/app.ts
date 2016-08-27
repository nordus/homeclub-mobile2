import { Component, ViewChild } from '@angular/core';
import { ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { AccountPage } from './pages/account/account';
import { DashboardPage } from './pages/dashboard/dashboard';
import { DevicesPage } from './pages/devices/devices';
import { HistoricalDataPage } from './pages/historical-data/historical-data';
import { LoginPage } from './pages/login/login';
import { SettingsPage } from './pages/settings/settings';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform) {
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

  openDevicesPage() {
    this.openPage( { component:DevicesPage } )
  }

  openDashboardPage() {
    this.openPage( { component:DashboardPage } )
  }

  openSettingsPage() {
    this.openPage( { component:SettingsPage } )
  }

  logOut() {
    this.nav.setRoot( LoginPage )
  }
}

ionicBootstrap(MyApp);
