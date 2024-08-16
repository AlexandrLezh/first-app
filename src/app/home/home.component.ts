import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HouseLocationComponent } from '../house-location/house-location.component';
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

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
    <app-house-location *ngFor="let housingLocation of housingLocationList" [housingLocation]="housingLocation">

    </app-house-location>
  </section>  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    housingLocationList: HousingLocation[] = [];
    housingService: HousingService = inject(HousingService);

    constructor() {
      this.housingLocationList = this.housingService.getAllHousingLocations();
    }
}
