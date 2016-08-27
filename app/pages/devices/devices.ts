import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VerifyEchoPage } from '../verify-echo/verify-echo';
import { VerifyNestPage } from '../verify-nest/verify-nest';
import { VerifyHuePage } from '../verify-hue/verify-hue';
import { VerifyScoutPage } from '../verify-scout/verify-scout';
import { VerifyLeeoPage } from '../verify-leeo/verify-leeo';

/*
  Generated class for the DevicesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/devices/devices.html',
})
export class DevicesPage {

  deviceVerificationPages: Array<{title: string, component: any}>;
  
  constructor(private navCtrl: NavController) {
    this.deviceVerificationPages = [
      { title: 'Amazon Echo', component: VerifyEchoPage },
      { title: 'Nest Smoke Detector', component: VerifyNestPage },
      { title: 'Phillips Hue', component: VerifyHuePage },
      { title: 'Scout Alarm', component: VerifyScoutPage },
      { title: 'Leeo Smart Alert', component: VerifyLeeoPage }
    ];
  }

  openPage(page) {
    this.navCtrl.push( page.component );
  }

}
