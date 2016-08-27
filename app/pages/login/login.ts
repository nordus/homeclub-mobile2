import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { DevicesPage } from '../devices/devices';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor( private navCtrl: NavController ) {

  }

  loginGuest() {
    this.navCtrl.setRoot( DevicesPage );
  }
  
  loginMember() {
    this.navCtrl.setRoot( DashboardPage );
  }

}
