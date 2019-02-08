import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatToolbarModule,
    MatDialogModule,
} from '@angular/material'

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatToolbarModule,
        MatDialogModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatTableModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatToolbarModule,
        MatDialogModule,
    ]
})

export class MaterialModule {}