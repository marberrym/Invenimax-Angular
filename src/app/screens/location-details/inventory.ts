export class Inventory {
    constructor(
        public name: string,
        public item_id: number,
        public location_id: number,
        public description: string,
        public par: number,
        public quantity: number
    ){}
}
