import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-transaction',
  templateUrl: './new-transaction.component.html',
  styleUrls: ['./new-transaction.component.css']
})
export class NewTransactionComponent implements OnInit {

  change: number;
  note: string;

  constructor(
    private dialogRef: MatDialogRef<NewTransactionComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) { }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close()
  }

  onSave() {
    this.dialogRef.close({
      note: this.note,
      date: new Date(),
      change: this.change
    })
  }

}
