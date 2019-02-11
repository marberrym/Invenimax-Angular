import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditItemService } from './edit-item.service';
import { ItemResponse } from './item-response';
import { MatDialog } from '@angular/material';
import { NewTransactionComponent } from 'src/app/components/new-transaction/new-transaction.component';
import { NewItemNoteComponent } from 'src/app/components/new-item-note/new-item-note.component';
import * as moment from 'moment'


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
    private route: ActivatedRoute,
    private dialog: MatDialog,
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

  newTransaction() {
    this.dialog.open(NewTransactionComponent);
    const dialogRef = this.dialog.open(NewTransactionComponent);

    dialogRef.afterClosed().subscribe(
      data => console.log(data)
    )
  }

  newNote() {
    this.dialog.open(NewItemNoteComponent);
    const dialogRef = this.dialog.open(NewItemNoteComponent);

    dialogRef.afterClosed().subscribe(
      data => {
        console.log(data.date);
        this.item.notes = this.item.notes.concat(data)
        this.edit.newItemNote(this.itemID, data)
        .subscribe(res => console.log(res))
      }
    )

    
  }



}
