import {
    Component,
    ElementRef,
    HostListener,
    AfterViewInit,
} from '@angular/core';

@Component({
    selector: 'app-gradient-button',
    templateUrl: './gradientButton.html',
    styleUrls: ['./gradientButton.css']
})

export class GradientButtonComponent implements AfterViewInit {
    gradientVisible = false;
    gradientTop: number;
    gradientLeft: number;
    gradientRadius: number;

    constructor(public el: ElementRef<HTMLElement>) {}

    get gradientStyle() {
        const top = this.gradientTop;
        const left = this.gradientLeft;
        const gradientRadius = this.gradientVisible ? 
            this.gradientRadius
        :
            0;
        
        return {
            'height.px': gradientRadius,
            'width.px': gradientRadius,
            'top.px': top,
            'left.px': left
        };
    }

    @HostListener('mouseenter')
    onmouseenter() {
        this.gradientVisible = true;
    }

    @HostListener('mouseleave')
    onmouseleave() {
        this.gradientVisible = false;
    }

    @HostListener('mousemove', ['$event'])
    onmousemove(event: MouseEvent) {
        this.gradientLeft = event.pageX - this.el.nativeElement.offsetLeft;
        this.gradientTop = event.pageY - this.el.nativeElement.offsetTop;
    }

    ngAfterViewInit() {
        this.gradientRadius = this.el.nativeElement.getBoundingClientRect().width;
    }
}