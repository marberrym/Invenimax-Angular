import { Component } from '@angular/core';
import { Location } from './location';

@Component({
    selector: 'app-location-form',
    templateUrl: './location.component.html',
    styleUrls: ['./location.component.css']
})

export class LocationComponent {

    model = new Location();
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
