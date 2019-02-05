import { Component, OnInit } from '@angular/core';
import { MyLocationsService } from './my-locations.service';
import { Location } from './location';

@Component({
  selector: 'app-my-locations',
  templateUrl: './my-locations.component.html',
  styleUrls: ['./my-locations.component.css']
})
export class MyLocationsComponent implements OnInit {

  constructor(private myLocationService: MyLocationsService) { }

  locations: Location[];
  error = '';

  ngOnInit() {
    this.getLocations();
  }

  getLocations(): void {
    this.myLocationService.getUserLocations().subscribe(
      (res: Location[]) => {
        this.locations = res;
      },
      (err) => {
        this.error = err;
      }
    )

  }

}
