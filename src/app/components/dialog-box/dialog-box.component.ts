import { Component, OnInit, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

@Injectable()
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
  ) {}

  openDialog() {
    console.log("Open Modal");
  }

  ngOnInit() {
  }

}
