import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return await this.userRepository.find({
      select: ['id','name','username','E_mail','birth_date','tel','shopname','gender'],
      relations: ['buyorders','sellorders','products']
    }); `This action returns all user`;
  }

  async findOne(id: number) {
    let user: User;
    try{
      return await this.userRepository.findOneOrFail(id,{
      select: ['id','name','username','E_mail','birth_date','tel','shopname','gender'],
      relations: ['buyorders','sellorders','products']
      });
    }
    catch(err){
      throw new HttpException('Not Found ' + err, HttpStatus.NOT_FOUND);
    };
    //return `This action returns a #${id} user`;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.softDelete(id);
  }
}
