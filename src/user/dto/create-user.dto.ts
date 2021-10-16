import { isNotEmpty, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
   @IsNotEmpty()
   name: string;
   @IsNotEmpty()
   email: string;
   @IsNotEmpty()
   username: string;
   @IsNotEmpty()
   tel: string;
   @IsNotEmpty()
   shopname: number;
   @IsNotEmpty()
   gender: string;
   @IsNotEmpty()
   birth_date: string;
}
