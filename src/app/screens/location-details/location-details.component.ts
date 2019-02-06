import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationDetailsService } from './location-details.service';
import { LocationDetails } from './location-details';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  locID: string
  locationDetails: LocationDetails

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationDetailsService,
    private router: Router
  ) {
    this.locID = this.route.snapshot.queryParams.loc
  }

  ngOnInit() {
    this.locationService.getLocationInfo(this.locID);
  }

  addItem() {
    this.router.navigate(['additem'], { queryParams: { loc: this.locID }})
  }

}
