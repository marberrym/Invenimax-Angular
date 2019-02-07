import { Component } from '@angular/core';
import { Location } from './location';
import { NewLocationService } from './new-location.service'


@Component({
    selector: 'app-new-location-form',
    templateUrl: './new-location.component.html',
    styleUrls: ['./new-location.component.css']
})

export class NewLocationComponent {

    constructor(
        private newLocationService: NewLocationService
    ) {}

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
        console.log(this.model);
        this.newLocationService.newLocation(this.model);
    }

    // Remove later.
    // get diagnostic() {
    //     return JSON.stringify(this.model);
    // }

}
