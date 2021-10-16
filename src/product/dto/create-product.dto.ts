import { IsNotEmpty } from "class-validator";

export class CreateProductDto {
    @IsNotEmpty()
    name : string;
    @IsNotEmpty()
    photo : string;
    @IsNotEmpty()
    unit_sold: number;
    @IsNotEmpty()
    sellerId:number;
}
