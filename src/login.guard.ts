import {
  CanActivate,
  // ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';

// 守卫 调用某个 Controller 之前判断权限
@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(AppService)
  private readonly appService: AppService;

  canActivate() // context: ExecutionContext,
  : boolean | Promise<boolean> | Observable<boolean> {
    console.log('login check', this.appService.getHello());
    return false;
    // return true;
  }
}
