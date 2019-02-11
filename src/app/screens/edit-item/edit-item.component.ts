import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditItemService } from './edit-item.service';
import { ItemResponse } from './item-response';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: ItemResponse
  itemID: number
  storeID: number

  constructor(
    private edit: EditItemService,
    private route: ActivatedRoute
  ) {
    this.itemID = this.route.snapshot.queryParams.item;
    this.storeID = this.route.snapshot.queryParams.store;
  }

  ngOnInit() {
    this.edit.getItem(this.storeID, this.itemID)
    .subscribe(res =>{
      console.log(res);
      this.item = res
    })
  }



}
