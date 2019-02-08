export class Inventory {
    constructor(
        public item: string,
        public id: number,
        public location_id: number,
        public description: string,
        public par: number,
        public quantity: number,
        public surplus: number,
    ){}
}
