import { Component, OnInit } from '@angular/core';

import { Location } from './screens/location/location';
import { LocationService } from './screens/location/location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'inventoryMGMT';
  locations: Location[];
  error = '';
  success = '';

  constructor(private locationService: LocationService) {
  }

  ngOnInit() {
    this.getLocations();
  }

  getLocations(): void {
    this.locationService.getAll().subscribe(
      (res: Location[]) => {
        this.locations = res;
      },
      (err) => {
        this.error = err;
      }
    )

  }
}
