import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from '../person-table/person-table.component';


@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Konrad",
      "surname": "Trigg",
      "email": "ktrigg0@ameblo.jp",
      "age": 1,
      "address": "Suite 87"
    }, {
      "givenName": "Robinet",
      "surname": "Hinchcliffe",
      "email": "rhinchcliffe1@sciencedirect.com",
      "age": 2,
      "address": "Room 506"
    }, {
      "givenName": "Vida",
      "surname": "Hullah",
      "email": "vhullah2@yahoo.com",
      "age": 3,
      "address": "Suite 32"
    }, {
      "givenName": "Emilie",
      "surname": "Parfitt",
      "email": "eparfitt3@1und1.de",
      "age": 4,
      "address": "Apt 367"
    }, {
      "givenName": "Carole",
      "surname": "Dranfield",
      "email": "cdranfield4@skype.com",
      "age": 5,
      "address": "Suite 23"
    }, {
      "givenName": "Kahlil",
      "surname": "Axel",
      "email": "kaxel5@sbwire.com",
      "age": 6,
      "address": "Suite 23"
    }, {
      "givenName": "Eryn",
      "surname": "Nizet",
      "email": "enizet6@taobao.com",
      "age": 7,
      "address": "Apt 557"
    }, {
      "givenName": "Biddy",
      "surname": "Threadgold",
      "email": "bthreadgold7@independent.co.uk",
      "age": 8,
      "address": "PO Box 29050"
    }, {
      "givenName": "Veradis",
      "surname": "Rudsdell",
      "email": "vrudsdell8@hud.gov",
      "age": 9,
      "address": "Apt 1383"
    }, {
      "givenName": "Laraine",
      "surname": "Dowley",
      "email": "ldowley9@mit.edu",
      "age": 10,
      "address": "Room 1598"
    }, {
      "givenName": "Briney",
      "surname": "Milch",
      "email": "bmilcha@comsenz.com",
      "age": 11,
      "address": "Room 1671"
    }, {
      "givenName": "Maria",
      "surname": "Bolino",
      "email": "mbolinob@nps.gov",
      "age": 12,
      "address": "PO Box 77012"
    }, {
      "givenName": "Duane",
      "surname": "MacAlaster",
      "email": "dmacalasterc@woothemes.com",
      "age": 13,
      "address": "Apt 457"
    }, {
      "givenName": "Sephira",
      "surname": "Glaserman",
      "email": "sglasermand@fda.gov",
      "age": 14,
      "address": "Suite 90"
    }, {
      "givenName": "Breanne",
      "surname": "Papen",
      "email": "bpapene@fotki.com",
      "age": 15,
      "address": "Suite 87"
    }, {
      "givenName": "Bourke",
      "surname": "Voase",
      "email": "bvoasef@sphinn.com",
      "age": 16,
      "address": "Room 504"
    }, {
      "givenName": "Wilma",
      "surname": "Dyneley",
      "email": "wdyneleyg@google.co.uk",
      "age": 17,
      "address": "1st Floor"
    }, {
      "givenName": "Seward",
      "surname": "Deetlefs",
      "email": "sdeetlefsh@nytimes.com",
      "age": 18,
      "address": "14th Floor"
    }, {
      "givenName": "Karel",
      "surname": "Triner",
      "email": "ktrineri@rambler.ru",
      "age": 19,
      "address": "6th Floor"
    }, {
      "givenName": "Cordey",
      "surname": "Bonallick",
      "email": "cbonallickj@slate.com",
      "age": 20,
      "address": "Apt 1561"
    }
  ]

}
