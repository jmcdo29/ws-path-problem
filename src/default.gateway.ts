import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';
import { AppService } from './app.service';

@WebSocketGateway({ path: 'default' })
export class DefaultGateway {
  constructor(private readonly appService: AppService) {}
  @SubscribeMessage('message')
  handleMessage(): string {
    return this.appService.getHello();
  }
}
