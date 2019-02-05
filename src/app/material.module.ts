import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    
} from '@angular/material'

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatTableModule,
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
        MatPaginatorModule
    ]
})

export class MaterialModule {}