import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

/*
  Generated class for the VerifyHuePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/verify-hue/verify-hue.html',
})
export class VerifyHuePage {

  constructor(private http: Http, private navCtrl: NavController) {

  }

  findBridge() {
    this.http.get( 'https://www.meethue.com/api/nupnp' ).subscribe(
      hueIpAddressResp => {
        let hueIpAddress = hueIpAddressResp.json();

        if ( hueIpAddress.length === 0 )  return alert( "No bridge found.  Please ensure you're connected to the same Wi-Fi network." );

        let hueInternalIp = hueIpAddress[0].internalipaddress;
        let hueInternalApiUrl = `http://${hueInternalIp}/api`;

        this.http.post( hueInternalApiUrl, { devicetype:"homeclub#mobile localuser" }).subscribe(
          hueUserResp => {
            let hueUser = hueUserResp.json()[0];

            if ( hueUser.error )  return alert( hueUser.error.description );
            
            let hueUsername = hueUser.success.username;

            this.http.get( `${hueInternalApiUrl}/${hueUsername}` ).subscribe(
              hueStateResp => {
                let hueState = hueStateResp.json();
                alert( 'Found ' + Object.keys(hueState.lights).length + ' lights with ' + Object.keys( hueState.schedules ).length + ' schedules');
              },
              err => {}
            )
          },
          err => alert( 'Bridge IP address is invalid.  Please wait for Hue to update.' )
        )
      },
      err => {}
    )
  }

}
