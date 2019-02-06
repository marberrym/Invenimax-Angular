import { Component, OnInit } from '@angular/core';
import { Item } from './item';
import { AddItemService } from './add-item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  model = new Item;
  locID: string;

  constructor(
    private itemService: AddItemService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.locID = this.route.snapshot.queryParams.loc
  }

  ngOnInit() {
    console.log(this.model);
  }

  addItem() {
    this.itemService.addItem(this.locID, this.model)
  }

}
