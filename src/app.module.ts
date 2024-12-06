import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MrgF1E11Module } from './mrg_f1_e11/mrg_f1_e11.module';
import { MrgF1E11 } from './mrg_f1_e11/entities/mrg_f1_e11.entity';
import { MrgF1E11Service } from './mrg_f1_e11/mrg_f1_e11.service';
import { MrgF1E11Controller } from './mrg_f1_e11/mrg_f1_e11.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [MrgF1E11],
      synchronize: false
    }),
    MrgF1E11Module
  ],
  controllers: [AppController, MrgF1E11Controller],
  providers: [AppService, MrgF1E11Service],
})
export class AppModule {}
