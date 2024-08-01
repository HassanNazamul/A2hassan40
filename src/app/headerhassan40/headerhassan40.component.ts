import { Component, Input } from '@angular/core';
import { PersonalInfo } from '../hassan40Interface';

@Component({
  selector: 'app-headerhassan40',
  templateUrl: './headerhassan40.component.html',
  styleUrl: './headerhassan40.component.css'
})
export class Headerhassan40Component {
  @Input() hassan40MyData!: PersonalInfo;

}
