import { Injectable } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import { Observable } from 'rxjs';
import { Response } from '@angular/http';
import {map} from 'rxjs/operators';

@Injectable()
export class UsersService {

  users = [
    {name: 'Вася'},
    {name: 'Ира'},
    {name: 'Настя'},
    {name: 'Алина'},
    {name: 'Барсик'},
    {name: 'Ваня'}
  ];

  constructor(private http: Http) {
  }

  getUsers() {
    return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
    .pipe(map(response => response.json()))
    .pipe(map(response => response.results))
    .pipe(map(users => {
      return users.map(user => {
        return {
          name: user.name.first + ' ' + user.name.last,
          geo: user.location.city + ', ' + user.location.state + ', ' + user.location.street,
          picture: user.picture.large
        };
      });
    }));
    }
  }
