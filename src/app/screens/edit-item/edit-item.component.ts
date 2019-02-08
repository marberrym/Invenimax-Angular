import { Component, OnInit } from '@angular/core';
import { Inventory } from '../location-details/inventory';
import { LocationDetailsComponent } from '../location-details/location-details.component';
import { LocationDetailsService } from '../location-details/location-details.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: Inventory

  constructor(
    private locationDetails: LocationDetailsService
  ) {}

  ngOnInit() {
    this.locationDetails.change.subscribe(editItem => {
      this.item = editItem;
    })
    
  }

  

}
