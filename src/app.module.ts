import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppGateway } from './app.gateway';
import { DefaultGateway } from './default.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, AppGateway, DefaultGateway],
})
export class AppModule {}
