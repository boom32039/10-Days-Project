import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { Repository } from 'typeorm';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateRegisterDto } from './dto/create-register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User> , private jwtService: JwtService ){}

  async register(registerDto : CreateRegisterDto) {
      try{
        const userData = await this.userRepository.findOne({username : registerDto.username});
        if (userData){
          return null;
        }
        const data = await this.userRepository.create(registerDto);
        return await this.userRepository.save(data);
      } catch(err){
      }
  }

  async createToken(user: User) {
    const payload = {
      id: user.id,
      name: user.name,

    };
    return { access_token: this.jwtService.sign(payload) };
  }

  async login(loginDto : LoginDto){
    const username =  await this.userRepository.findOne({username : loginDto.username});
    if (!username){
      return null; 
    }
    let pass = await this.userRepository.findOne({password : loginDto.password});
    if (!pass){
      return null;
    }
    return await this.createToken(pass);
  }
  

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
