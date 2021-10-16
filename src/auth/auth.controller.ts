import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus, Res, UseGuards } from '@nestjs/common';
import { find } from 'rxjs';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { CreateRegisterDto } from './dto/create-register.dto';
import { LoginDto } from './dto/login.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Response } from 'express';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() createRegisterDto : CreateRegisterDto , @Res() res : Response)  {
    const result = await this.authService.register(createRegisterDto);
    if (!result){
      throw new HttpException('fcking existed' , HttpStatus.UNPROCESSABLE_ENTITY,);
    }
    return res.status(200).send('Register success');
  }

  @Post('login')
  async login(@Body() loginDto : LoginDto , @Res() res : Response ) {
    console.log(1);
    const token = await this.authService.login(loginDto);
    console.log(token);
    if (!token){
      throw new HttpException('fcking wrong' , HttpStatus.UNAUTHORIZED);
    }
    res.cookie("access_token", token, { httpOnly: true, secure: false });
    return res.status(200).send('Login success');
  }
  
  @UseGuards(JwtAuthGuard)
  @Delete('logout')
  async logout(@Res() res : Response ) {
    res.clearCookie('access_token');
    return res.status(200).send('Logout success');
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
