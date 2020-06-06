import { CanActivate, Injectable, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class AppGuard implements CanActivate {
  canActivate(
  ): boolean | Promise<boolean> | Observable<boolean> {
    throw new BadRequestException();
  }
}
