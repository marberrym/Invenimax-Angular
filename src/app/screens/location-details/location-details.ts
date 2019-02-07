import { Inventory } from './inventory';

export class LocationDetails {
    constructor(
        public name: string,
        public address: string,
        public state: string,
        public inventory: Inventory[] = [],
        public id: number,
    ){}
}
