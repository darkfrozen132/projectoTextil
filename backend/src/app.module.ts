import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TrabajadoresModule } from './modules/trabajadores.module';
import { databaseConfig } from './config/database.config';
import { OrdenProduccionModule } from './modules/orden-produccion.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot(databaseConfig),
    TrabajadoresModule,
    OrdenProduccionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
