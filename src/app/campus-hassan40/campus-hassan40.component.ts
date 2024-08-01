import { Component, Input } from '@angular/core';
import { Campus } from '../hassan40Interface';

@Component({
  selector: 'app-campus-hassan40',
  templateUrl: './campus-hassan40.component.html',
  styleUrl: './campus-hassan40.component.css'
})
export class CampusHassan40Component {

  @Input() campusData991704017!: Campus[];

  //empty string to collect user selected inpute
  selectedCampus: string = '';

  //defining object of campus type
  selectedCampusDetails: Campus | null = null;


  //function to check and provide output
  onCampusChange(selectedCampusName: string) {
    console.log('Selected campus:', selectedCampusName);

    this.selectedCampus = selectedCampusName;

    if (this.selectedCampus !== 'none') {
      this.selectedCampusDetails = null; // Reset the selectedCampusDetails before the loop
      for (const x of this.campusData991704017) {
        if (x.campus === this.selectedCampus) {

          // passing the object from x to empty object
          this.selectedCampusDetails = x;
          break; // Exit the loop once the campus is found
        }
      }
    } else {
      this.selectedCampusDetails = null;
    }

  }
}
