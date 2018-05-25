import { Component } from '@angular/core';
import { Person } from './Person';
import { Name, Address } from 'softheon-forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  maxDate: Date = new Date();
  person: Person = new Person();
  
  ngOnInit() {
    this.person.name = new Name();
    this.person.address = new Address();
  }
}
