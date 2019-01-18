export class Location {
    constructor(
        public name: string,
        public address: string,
        public city: string,
        public state: number,
        public item: string,
        public quantity: number,
        private id?: number,
    ) {} 
}