import { Component, OnInit } from '@angular/core';
import { Inventory } from '../location-details/inventory';
import { LocationDetailsService } from '../location-details/location-details.service';
import { ActivatedRoute } from '@angular/router';
import { EditItemService } from './edit-item.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: Inventory
  itemID: number
  storeID: number

  constructor(
    private locationDetails: LocationDetailsService,
    private edit: EditItemService,
    private route: ActivatedRoute
  ) {
    this.itemID = this.route.snapshot.queryParams.item;
    this.storeID = this.route.snapshot.queryParams.store;
  }

  ngOnInit() {
    this.locationDetails.change.subscribe(editItem => {
      this.item = editItem;
    })
  }



}
