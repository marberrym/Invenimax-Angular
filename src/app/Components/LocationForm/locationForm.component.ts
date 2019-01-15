import { Component } from '@angular/core';
import { Location } from './location';

@Component({
    selector: 'app-location-form',
    templateUrl: './locationForm.component.html',
    styleUrls: ['./locationForm.component.css']
})

export class LocationForm {

    model = new Location("Sage", "Atlanta", 500);

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }

    // Remove later.
    get diagnostic() {
        return JSON.stringify(this.model);
    }

}
