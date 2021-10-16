import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    
    username : string;
    name : string;
    email : string;
    tel : string;
    shopname : string;
    gender : string;
    birth_date : string;
}
