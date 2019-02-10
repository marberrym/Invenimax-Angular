import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationDetailsService } from './location-details.service';
import { LocationDetails } from './location-details';
import { Inventory } from './inventory';
import { MatTableDataSource } from '@angular/material';
import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  locID: string
  locationDetails: LocationDetails
  inventory: Inventory[]
  dataSource: any
  
  displayed = ['id', 'item', 'description', 'par', 'quantity', 'surplus', 'manage', 'delete'];

  constructor(
    private route: ActivatedRoute,
    private locationService: LocationDetailsService,
    private router: Router,
    // public dialogBox: DialogBoxComponent,
  ) {
    this.locID = this.route.snapshot.queryParams.loc
  }

  ngOnInit() {
    this.locationService.getLocationInfo(this.locID)
    .subscribe(res => {
      console.log(res);
      this.locationDetails = res;
      this.inventory = res.inventory;
      this.dataSource = new MatTableDataSource<Inventory>(this.inventory);
    })
  }

  addItem() {
    this.router.navigate(['additem'], { queryParams: { loc: this.locID }})
  }

  removeItem(id) {
    this.inventory = this.inventory.filter(item => item.id != id);
    this.dataSource = new MatTableDataSource<Inventory>(this.inventory);
    this.locationService.removeItem(id)
    .subscribe(res => {
      console.log(res)
    })
  }

  setItem(row) {
    this.locationService.editItem(row, this.locID);
  }

  openMenu() {
    // this.dialogBox.openDialog()
  }

}
