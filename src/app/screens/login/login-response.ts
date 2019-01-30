export class LoginResponse {
    constructor(
        public status: string,
        public name?: string,
        public token?: string
    ){}
}
