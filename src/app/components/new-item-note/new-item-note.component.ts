import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material'

@Component({
  selector: 'app-new-item-note',
  templateUrl: './new-item-note.component.html',
  styleUrls: ['./new-item-note.component.css']
})
export class NewItemNoteComponent implements OnInit {

  note: string

  constructor(
    private dialogRef: MatDialogRef<NewItemNoteComponent>,
    @Inject(MAT_DIALOG_DATA) data
  ) {
  }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close()
  }

  onSave() {
    this.dialogRef.close({note: this.note})
  }

}
