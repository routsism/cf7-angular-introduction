import { Component } from '@angular/core';
import { RouterOutlet , RouterLink } from '@angular/router';
// import { PersonTableComponent } from './components/person-table/person-table.component';
// import { Person } from './shared./interfaces/person';
// import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ListGroupMenuComponent } from './components/list-group-menu/list-group-menu.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // name= 'Mixalis';

  // // Step 1: One way binding of data
  // person = {
  //   givenName: 'Mixalis',
  //   surname: 'Routsis',
  //   age: 26,
  //   email: 'michroutsis@aueb.gr'
  // }

  // Step 3: Component Input
  // person0: Person = {
  //   givenName: "Christodoulos",
  //   surname: "Fragkoudakis",
  //   age: 55,
  //   email: "chfrag@aueb.gr",
  //   address: "Athens, Greece"
  // }

  // person1: Person = {
  //   givenName: "John",
  //   surname: "Doe",
  //   age: 32,
  //   email: "john@example.com",
  //   address: "New York , USA"
  // }

  // users: Person[] = [
  //   {
  //     "givenName": "Konrad",
  //     "surname": "Trigg",
  //     "email": "ktrigg0@ameblo.jp",
  //     "age": 1,
  //     "address": "Suite 87"
  //   }, {
  //     "givenName": "Robinet",
  //     "surname": "Hinchcliffe",
  //     "email": "rhinchcliffe1@sciencedirect.com",
  //     "age": 2,
  //     "address": "Room 506"
  //   }, {
  //     "givenName": "Vida",
  //     "surname": "Hullah",
  //     "email": "vhullah2@yahoo.com",
  //     "age": 3,
  //     "address": "Suite 32"
  //   }, {
  //     "givenName": "Emilie",
  //     "surname": "Parfitt",
  //     "email": "eparfitt3@1und1.de",
  //     "age": 4,
  //     "address": "Apt 367"
  //   }, {
  //     "givenName": "Carole",
  //     "surname": "Dranfield",
  //     "email": "cdranfield4@skype.com",
  //     "age": 5,
  //     "address": "Suite 23"
  //   }, {
  //     "givenName": "Kahlil",
  //     "surname": "Axel",
  //     "email": "kaxel5@sbwire.com",
  //     "age": 6,
  //     "address": "Suite 23"
  //   }, {
  //     "givenName": "Eryn",
  //     "surname": "Nizet",
  //     "email": "enizet6@taobao.com",
  //     "age": 7,
  //     "address": "Apt 557"
  //   }, {
  //     "givenName": "Biddy",
  //     "surname": "Threadgold",
  //     "email": "bthreadgold7@independent.co.uk",
  //     "age": 8,
  //     "address": "PO Box 29050"
  //   }, {
  //     "givenName": "Veradis",
  //     "surname": "Rudsdell",
  //     "email": "vrudsdell8@hud.gov",
  //     "age": 9,
  //     "address": "Apt 1383"
  //   }, {
  //     "givenName": "Laraine",
  //     "surname": "Dowley",
  //     "email": "ldowley9@mit.edu",
  //     "age": 10,
  //     "address": "Room 1598"
  //   }, {
  //     "givenName": "Briney",
  //     "surname": "Milch",
  //     "email": "bmilcha@comsenz.com",
  //     "age": 11,
  //     "address": "Room 1671"
  //   }, {
  //     "givenName": "Maria",
  //     "surname": "Bolino",
  //     "email": "mbolinob@nps.gov",
  //     "age": 12,
  //     "address": "PO Box 77012"
  //   }, {
  //     "givenName": "Duane",
  //     "surname": "MacAlaster",
  //     "email": "dmacalasterc@woothemes.com",
  //     "age": 13,
  //     "address": "Apt 457"
  //   }, {
  //     "givenName": "Sephira",
  //     "surname": "Glaserman",
  //     "email": "sglasermand@fda.gov",
  //     "age": 14,
  //     "address": "Suite 90"
  //   }, {
  //     "givenName": "Breanne",
  //     "surname": "Papen",
  //     "email": "bpapene@fotki.com",
  //     "age": 15,
  //     "address": "Suite 87"
  //   }, {
  //     "givenName": "Bourke",
  //     "surname": "Voase",
  //     "email": "bvoasef@sphinn.com",
  //     "age": 16,
  //     "address": "Room 504"
  //   }, {
  //     "givenName": "Wilma",
  //     "surname": "Dyneley",
  //     "email": "wdyneleyg@google.co.uk",
  //     "age": 17,
  //     "address": "1st Floor"
  //   }, {
  //     "givenName": "Seward",
  //     "surname": "Deetlefs",
  //     "email": "sdeetlefsh@nytimes.com",
  //     "age": 18,
  //     "address": "14th Floor"
  //   }, {
  //     "givenName": "Karel",
  //     "surname": "Triner",
  //     "email": "ktrineri@rambler.ru",
  //     "age": 19,
  //     "address": "6th Floor"
  //   }, {
  //     "givenName": "Cordey",
  //     "surname": "Bonallick",
  //     "email": "cbonallickj@slate.com",
  //     "age": 20,
  //     "address": "Apt 1561"
  //   }
  // ]



}
