import { Component } from '@angular/core';
import { Location } from './location';

@Component({
    selector: 'app-location-form',
    templateUrl: './locationForm.component.html',
    styleUrls: ['./locationForm.component.css']
})

export class LocationForm {

    // model = new Location("Sage", "Atlanta", 500);
    model = new Location("", "", "", 0, "", 0);
    submitted = false;

    states = [
        "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "DC", "FL", "GA", "HI", "ID", "IL", "IN",
        "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH",
        "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT",
        "VT", "VA", "WA", "WV", "WI", "WY"
    ]

    ngOnInit() {
    }

    onSubmit() {
        this.submitted = true;
    }

    // Remove later.
    // get diagnostic() {
    //     return JSON.stringify(this.model);
    // }

}
