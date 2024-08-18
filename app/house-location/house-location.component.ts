import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-house-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './house-location.component.html',
  styleUrls: ['./house-location.component.css']
})
export class HouseLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
