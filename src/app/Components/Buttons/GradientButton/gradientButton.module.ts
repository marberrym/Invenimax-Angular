import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GradientButtonComponent } from './gradientButton.component';

@NgModule({
    imports: [CommonModule],
    declarations: [GradientButtonComponent],
    exports: [GradientButtonComponent]
})
export class GradientButtonModule {}
