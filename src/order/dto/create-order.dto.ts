import { IsNotEmpty, isNotEmpty, isNotEmptyObject } from "class-validator";
import { Product } from "src/product/entities/product.entity";
import { User } from "src/user/entities/user.entity";

export class CreateOrderDto {
    @IsNotEmpty()
    buyerId: number;
    @IsNotEmpty()
    sellerId: number;
    @IsNotEmpty()
    productId: number;
    @IsNotEmpty()
    amount: number;
    @IsNotEmpty()
    isPaymentDone: boolean;
    @IsNotEmpty()
    paymentDate: string;
}
