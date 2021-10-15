import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(@InjectRepository(Product) private readonly productRepository: Repository<Product>) {}
  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }

  async findAll() {
    return await this.productRepository.find({
      select: ['id','name','photo','unit_sold'],
      relations: ['seller','orders']
    });
  }

  async findOne(id: number) {
    let product: Product;
    try{
      return await this.productRepository.findOneOrFail(id,{
        select: ['id','name','photo','unit_sold'],
        relations: ['seller','orders']
      });
    }
    catch(err){
      throw new HttpException('Not Found ' + err, HttpStatus.NOT_FOUND);
    };
    //return `This action returns a #${id} user`;
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    return await this.productRepository.update(id, updateProductDto);
  }

  async remove(id: number) {
    return await this.productRepository.softDelete(id);
  }
}
