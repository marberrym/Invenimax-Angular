import { Component, OnInit } from '@angular/core';
import { MyLocationsService } from './my-locations.service';
import { Location } from './location';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-locations',
  templateUrl: './my-locations.component.html',
  styleUrls: ['./my-locations.component.css']
})
export class MyLocationsComponent implements OnInit {

  constructor(
    private myLocationService: MyLocationsService,
    private router: Router
  ) { }

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

  getLocation(id): void {
    this.router.navigate(['/location/'], { queryParams: { loc: id }})
  }

}
