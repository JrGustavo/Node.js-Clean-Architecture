import { Validators } from "../../config";



export class RegisterUserDto {

    private constructor(
        public name: string,
        public email: string,
        public password: string

    ) {}

    static create(object: {[key: string]: any}): [string?, RegisterUserDto?] {

        const {name, email, password} = object;

        if (!name) return['Misswing name'];
        if (!email) return['Misswing email'];
        if (!Validators.email.test(email)) return ['Email is not validated']
        if(!password) return ['Missing password']
        if( password.length <  6 ) return ['Password to short ']



        return [
            undefined,
            new RegisterUserDto(
             name, email.toLowerCase(), password
            )

        ];

    }

}