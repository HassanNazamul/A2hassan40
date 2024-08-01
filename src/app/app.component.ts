import { Component } from '@angular/core';
import { PersonalInfo, Book, Campus } from './hassan40Interface';
import cpdata from '../assets/data/Assignment02.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'A2hassan40';

  Hassan40Personal: PersonalInfo = cpdata.a2Personal;
  Hassan40Books: Book[] = cpdata.myBooks;
  Hassan40Campus: Campus[] = cpdata.campusData;
}
