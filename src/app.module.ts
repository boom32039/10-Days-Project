import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { AuthModule } from './auth/auth.module';


import config from './config/config';

@Module({
   imports: [
      ConfigModule.forRoot({
         isGlobal: true,
         load: [config],
      }),
      TypeOrmModule.forRootAsync({
         imports: [ConfigService],
         useFactory: async (configService: ConfigService) => ({
            type: 'postgres',
            port: configService.get<number>('database.port'),
            username: configService.get<string>('database.username'),
            password: configService.get<string>('database.password'),
            database: configService.get<string>('database.name'),
            synchronize: false,
            autoLoadEntities: true,
         }),
         inject: [ConfigService],
      }),
      ProductModule,
      UserModule,
      OrderModule,
      AuthModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
