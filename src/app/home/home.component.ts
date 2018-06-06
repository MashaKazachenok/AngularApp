import {Component} from '@angular/core';
import {User} from '../core/models/user';

@Component({templateUrl: 'home.component.html'})

export class HomeComponent {
  currentUser: User;

  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
}
