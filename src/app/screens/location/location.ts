export class Location {
    constructor(
        public name: string = "",
        public address: string = "",
        public city: string = "",
        public state: number = 0,
        private id?: number,
    ) {} 
}