import { Component } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['passenger-dashboard.component.scss'],
    template: `
        <div>
            <h3>Airline Passengers</h3>
            <ul>
            <li *ngFor="let passenger of passengers; let i = index;">
                <span 
                class="status"
                [class.checked-in]="passenger.checkedIn"></span>
                {{ i }}: {{ passenger.fullname }}
                <div class="date">
                Check in date: 
                    {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd') : 'Not checked in' }}
                </div>
                <div class="children">
                Children: {{ passenger.children?.length || 'N/A' }}
                </div>
            </li>
            </ul>
        </div>
    `
})
export class PassengerDashboardComponent{
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