import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationDetailsService } from './location-details.service';
import { LocationDetails } from './location-details';
import { Inventory } from './inventory';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  locID: string
  locationDetails: LocationDetails
  inventory: Inventory[]
  dataSource = new MatTableDataSource<Inventory>(this.inventory);
  

  columnsToDisplay = ['item_id', 'item', 'description', 'par', 'quantity'];

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationDetailsService,
    private router: Router
  ) {
    this.locID = this.route.snapshot.queryParams.loc
  }

  ngOnInit() {
    this.locationService.getLocationInfo(this.locID)
    .subscribe(res => {
      this.locationDetails = res;
      this.inventory = res.inventory;
    })
  }

  addItem() {
    this.router.navigate(['additem'], { queryParams: { loc: this.locID }})
  }

}
