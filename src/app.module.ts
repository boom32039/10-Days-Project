import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
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
      UserModule,
      CourseModule,
   ],
   controllers: [AppController],
   providers: [AppService],
})
export class AppModule {}
