import {Component, OnInit} from '@angular/core';
import {first} from 'rxjs/operators';

import {User} from '../core/models/user';
import {UserService} from '../core/services/user.service';

@Component({templateUrl: 'settings.component.html'})
export class SettingsComponent implements OnInit {
  currentUser: User;
  users: User[] = [];

  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  deleteUser(id: number) {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers() {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
