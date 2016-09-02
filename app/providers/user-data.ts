import { Injectable } from '@angular/core';
import {Storage, LocalStorage, Events} from 'ionic-angular';

/*
  Generated class for the UserData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserData {

  storage = new Storage(LocalStorage);
  username = '';
  userpwd = '';
  
  constructor(private events: Events) {
    this.storage.get('username').then((value) => {
      this.username = value;
    });
    this.storage.get('userpwd').then((value) => {
      this.userpwd = value;
    });
  }

  saveLocalStorage( credentials ) {
    this.setUsername(credentials.email);
    this.setUserPwd(credentials.password);
    this.events.publish('user:login');
  }

  setUsername(username) {
    this.storage.set('username', username);
  }

  setUserPwd(pwd) {
    this.storage.set('userpwd', pwd);
  }

}

