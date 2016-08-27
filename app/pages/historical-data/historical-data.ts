declare var require: any;

import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { CHART_DIRECTIVES, Highcharts } from 'angular2-highcharts';
import { NavController } from 'ionic-angular';
import { KeyValuePipe } from '../../pipes/key-value';
var HighchartsMore = require('highcharts/highcharts-more');
HighchartsMore( Highcharts );

/*
  Generated class for the HistoricalDataPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  directives: [CHART_DIRECTIVES],
  pipes: [KeyValuePipe],
  templateUrl: 'build/pages/historical-data/historical-data.html',
})
export class HistoricalDataPage {

  chartData: Object;

  sliderOptions = {
      pager: true
  }

  constructor(private navCtrl: NavController, http: Http) {
      http.get( 'data/highcharts-data.json' ).subscribe(res => {
          this.chartData = res.json();
      });
  }
}