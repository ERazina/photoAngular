import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  users = [];
  searchString = '';
  constructor (private userService: UsersService) {}

  ngOnInit() {
    // this.users = this.userService.users;
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

}
