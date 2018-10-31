import { Injectable } from '@angular/core';
import { Http2SecureServer } from 'http2';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users = [
    {name: 'Вася'},
    {name: 'Ира'},
    {name: 'Настя'},
    {name: 'Алина'},
    {name: 'Барсик'},
    {name: 'Ваня'}
  ];

  constructor(private http: Http) { }
}
