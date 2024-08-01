import { Component, Input } from '@angular/core';
import { PersonalInfo } from '../hassan40Interface';


@Component({
  selector: 'app-footerhassan40',
  templateUrl: './footerhassan40.component.html',
  styleUrl: './footerhassan40.component.css'
})
export class Footerhassan40Component {
  @Input() hassan40MyData!: PersonalInfo;

}
