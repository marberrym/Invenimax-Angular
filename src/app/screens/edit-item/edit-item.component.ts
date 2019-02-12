import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditItemService } from './edit-item.service';
import { ItemResponse } from './item-response';
import { MatDialog, MatTableDataSource } from '@angular/material';
import { NewTransactionComponent } from 'src/app/components/new-transaction/new-transaction.component';
import { NewItemNoteComponent } from 'src/app/components/new-item-note/new-item-note.component';
import { Transactions } from './transactions';


@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  item: any
  itemID: number
  storeID: number
  dataSource: any
  chartData: any
  loading: boolean = false;
  

  displayed = ['date', 'note', 'prev_quantity', 'inven_change']

  transactionModel: Transactions

  constructor(
    private edit: EditItemService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
  ) {
    this.itemID = this.route.snapshot.queryParams.item;
    this.storeID = this.route.snapshot.queryParams.store;
  }

  renderData() {
    this.dataSource = new MatTableDataSource<Transactions>(this.item.transactions);
  }
  
  ngOnInit() {
    this.loading = true;
    this.edit.getItem(this.storeID, this.itemID)
    .subscribe(res =>{
      console.log(res);
      this.item = res;
      this.renderData();
      this.chartData = {
        chart: {
          caption: `${this.item.item}`,
          subCaption: 'Stock over time',
          xAxisName: 'Time',
          yAxisName: 'Units on Hand',
          theme: 'candy'
        },
        trendlines: [{
          "line": [{
              "color": "red",
              "thickness": "1",
              "alpha": "60",
              "value": "80",
          }]
        }],
        categories: [
          {
            "category": [
              {
                "label": "2012"
              },
              {
                "label": "2013"
              },
              {
                "label": "2014"
              },
              {
                "label": "2015"
              },
              {
                "label": "2016"
              }
            ]
          }
        ],
        dataset: [
          {
            "seriesname": "Par",
            "data": [
              {
                "value": this.item.par
              },
              {
                "value": this.item.par
              },
              {
                "value": this.item.par
              },
              {
                "value": this.item.par
              },
              {
                "value": this.item.par
              }
            ]
          },
          {
            "seriesname": "Instagram",
            "data": [
              {
                "value": "16"
              },
              {
                "value": "28"
              },
              {
                "value": "34"
              },
              {
                "value": "42"
              },
              {
                "value": "54"
              }
            ]
          },
          {
            "seriesname": "LinkedIn",
            "data": [
              {
                "value": "20"
              },
              {
                "value": "22"
              },
              {
                "value": "27"
              },
              {
                "value": "22"
              },
              {
                "value": "29"
              }
            ]
          },
          {
            "seriesname": "Twitter",
            "data": [
              {
                "value": "18"
              },
              {
                "value": "19"
              },
              {
                "value": "21"
              },
              {
                "value": "21"
              },
              {
                "value": "24"
              }
            ]
          }]
      };
      this.loading = false;
    })
  }

  newTransaction() {
    const dialogRef = this.dialog.open(NewTransactionComponent);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          let body = {
            date: data.date,
            prev_quantity: this.item.quantity,
            inven_change: Number(data.change),
            note: data.note,
            newSurplus: this.item.surplus + Number(data.change)
          }
          console.log(body);
          this.item.quantity = this.item.quantity + body.inven_change;
          this.item.surplus = this.item.surplus + Number(data.change);
          this.item.transactions = this.item.transactions.concat(body);
          this.renderData();
          this.edit.newTransaction(this.itemID, body).subscribe(res => {
            console.log(res);
          })
        }
      }
    )
  }

  newNote() {
    const dialogRef = this.dialog.open(NewItemNoteComponent);

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.item.notes = this.item.notes.concat(data)
          this.edit.newItemNote(this.itemID, data)
          .subscribe(res => console.log(res))
        } 
      }
    )
  }
}
