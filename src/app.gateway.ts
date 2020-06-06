import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { AppService } from './app.service';
import { UseGuards } from '@nestjs/common';
import { AppGuard } from './app.guard';

@WebSocketGateway()
export class AppGateway {
  constructor(private readonly appService: AppService) {}

  @UseGuards(AppGuard)
  @SubscribeMessage('message')
  handleMessage(): string {
    return this.appService.getHello();
  }
}
