import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    
} from '@angular/material'

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
    ]
})

export class MaterialModule {}