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
      "surName": "Trigg",
      "email": "ktrigg0@ameblo.jp",
      "age": 1,
      "address": "Suite 87"
    }, {
      "givenName": "Robinet",
      "surName": "Hinchcliffe",
      "email": "rhinchcliffe1@sciencedirect.com",
      "age": 2,
      "address": "Room 506"
    }, {
      "givenName": "Vida",
      "surName": "Hullah",
      "email": "vhullah2@yahoo.com",
      "age": 3,
      "address": "Suite 32"
    }, {
      "givenName": "Emilie",
      "surName": "Parfitt",
      "email": "eparfitt3@1und1.de",
      "age": 4,
      "address": "Apt 367"
    }, {
      "givenName": "Carole",
      "surName": "Dranfield",
      "email": "cdranfield4@skype.com",
      "age": 5,
      "address": "Suite 23"
    }, {
      "givenName": "Kahlil",
      "surName": "Axel",
      "email": "kaxel5@sbwire.com",
      "age": 6,
      "address": "Suite 23"
    }, {
      "givenName": "Eryn",
      "surName": "Nizet",
      "email": "enizet6@taobao.com",
      "age": 7,
      "address": "Apt 557"
    }, {
      "givenName": "Biddy",
      "surName": "Threadgold",
      "email": "bthreadgold7@independent.co.uk",
      "age": 8,
      "address": "PO Box 29050"
    }, {
      "givenName": "Veradis",
      "surName": "Rudsdell",
      "email": "vrudsdell8@hud.gov",
      "age": 9,
      "address": "Apt 1383"
    }, {
      "givenName": "Laraine",
      "surName": "Dowley",
      "email": "ldowley9@mit.edu",
      "age": 10,
      "address": "Room 1598"
    }, {
      "givenName": "Briney",
      "surName": "Milch",
      "email": "bmilcha@comsenz.com",
      "age": 11,
      "address": "Room 1671"
    }, {
      "givenName": "Maria",
      "surName": "Bolino",
      "email": "mbolinob@nps.gov",
      "age": 12,
      "address": "PO Box 77012"
    }, {
      "givenName": "Duane",
      "surName": "MacAlaster",
      "email": "dmacalasterc@woothemes.com",
      "age": 13,
      "address": "Apt 457"
    }, {
      "givenName": "Sephira",
      "surName": "Glaserman",
      "email": "sglasermand@fda.gov",
      "age": 14,
      "address": "Suite 90"
    }, {
      "givenName": "Breanne",
      "surName": "Papen",
      "email": "bpapene@fotki.com",
      "age": 15,
      "address": "Suite 87"
    }, {
      "givenName": "Bourke",
      "surName": "Voase",
      "email": "bvoasef@sphinn.com",
      "age": 16,
      "address": "Room 504"
    }, {
      "givenName": "Wilma",
      "surName": "Dyneley",
      "email": "wdyneleyg@google.co.uk",
      "age": 17,
      "address": "1st Floor"
    }, {
      "givenName": "Seward",
      "surName": "Deetlefs",
      "email": "sdeetlefsh@nytimes.com",
      "age": 18,
      "address": "14th Floor"
    }, {
      "givenName": "Karel",
      "surName": "Triner",
      "email": "ktrineri@rambler.ru",
      "age": 19,
      "address": "6th Floor"
    }, {
      "givenName": "Cordey",
      "surName": "Bonallick",
      "email": "cbonallickj@slate.com",
      "age": 20,
      "address": "Apt 1561"
    }
  ]

}
