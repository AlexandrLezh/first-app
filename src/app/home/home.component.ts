import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseLocationComponent } from '../house-location/house-location.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HouseLocationComponent],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-house-location></app-house-location>
  </section>  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
