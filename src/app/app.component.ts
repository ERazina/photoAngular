import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users = [
    {name: 'Вася'},
    {name: 'Ира'},
    {name: 'Настя'},
    {name: 'Алина'},
    {name: 'Барсик'},
    {name: 'Ваня'}
  ];
}
