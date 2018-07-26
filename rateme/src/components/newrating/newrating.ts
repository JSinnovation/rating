import { Component, Input } from '@angular/core';

/**
 * Generated class for the NewratingComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'newrating',
  templateUrl: 'newrating.html'
})
export class NewratingComponent {
@Input() ratingnumber: number;
  text: string;

  constructor() {
  
  }

}
