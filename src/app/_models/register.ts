export class Register {
    constructor(
        public username: string,
        public password: string,
        public firstName: string,
        public Lname?: string,
        public email?: string,
        public dob?: string
    ) { }
}
