import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the DashboardPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/dashboard/dashboard.html',
})
export class DashboardPage {

  constructor(public af: AngularFire, private navCtrl: NavController) {

  }

}
