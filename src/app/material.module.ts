import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    
} from '@angular/material'

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,
    ]
})

export class MaterialModule {}