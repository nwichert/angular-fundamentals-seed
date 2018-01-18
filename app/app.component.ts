import { Component } from '@angular/core';

interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate: number | null,
  children: Child[] | null
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <passenger-dashboard></passenger-dashboard>
    </div>
  `
})
export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: 'Stephan',
    checkedIn: true,
    checkedInDate: 1490742000000,
    children: null
  }, {
    id: 2,
    fullname: 'Rose',
    checkedIn: true,
    checkedInDate: 1490742000000,
    children: null
  }, {
    id: 3,
    fullname: 'James',
    checkedIn: true,
    checkedInDate: 1488412800000,
    children: null
  }, {
    id: 4,
    fullname: 'Nick',
    checkedIn: false,
    checkedInDate: null,
    children: [{ name: 'Addie', age: 6},{ name: 'Belle', age: 4}, {name: 'William', age: 1}]
  }, {
    id: 5,
    fullname: 'Jackie',
    checkedIn: false,
    checkedInDate: null,
     children: [{ name: 'Addie', age: 6},{ name: 'Belle', age: 4}, {name: 'William', age: 1}]
  }];
}