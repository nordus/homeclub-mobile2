import { Component } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { DashboardPage } from '../dashboard/dashboard';
import { DevicesPage } from '../devices/devices';
import { AuthMethods, AuthProviders, FirebaseAuth } from 'angularfire2';
import { UserData } from '../../providers/user-data';

/*
  Generated class for the LoginPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login/login.html'
})
export class LoginPage {

  user = { email:'', password:'' };
  
  constructor(
    public alertController: AlertController,
    public auth: FirebaseAuth,
    private navCtrl: NavController,
    public userData: UserData) {

  }
  
  public doLogin(credentials) {
    //
    // Save credentials to localstorage and flag form as submitted
    this.userData.saveLocalStorage( credentials );
    //
    // Login user with Firebase
    this.auth.login(credentials).then((authData) => {
      this.loginMember();
    }).catch((error) => {
      this.LoginError(error);
    })
  }

  loginGuest() {
    this.navCtrl.setRoot( DevicesPage );
  }
  
  loginMember() {
    this.navCtrl.setRoot( DashboardPage );
  }

  private LoginError(error): void {
    let alert = this.alertController.create({
      title: 'Login Failed',
      subTitle: 'Please check your email and/or password and try again',
      buttons: ['Ok']
    });
    alert.present();
  }

}
