import { Component } from '@angular/core';
import { Deploy } from '@ionic/cloud-angular';
import { NavController } from 'ionic-angular';

/*
  Generated class for the CheckForUpdatePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/check-for-update/check-for-update.html',
})
export class CheckForUpdatePage {

  updateAvailable = false;
  
  constructor(private deploy: Deploy, private navCtrl: NavController) {

  }

  checkForUpdate() {
    this.deploy.check().then((updateAvailable: boolean) => {
      // When updateAvailable is true, you can apply the snapshot
      this.updateAvailable = updateAvailable;
    });
  }

  doUpdate() {
    this.deploy.download().then(() => {
      return this.deploy.extract().then(() => this.deploy.load());
    });
  }

}
