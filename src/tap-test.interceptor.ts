import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Logger,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

@Injectable()
export class TapTestInterceptor implements NestInterceptor {
  private readonly logger = new Logger('TapTestInterceptor');

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      tap((data) => {
        this.logger.log(`Data: ${JSON.stringify(data)}`);
      }),

      // timeout(3000),
      // catchError((error) => {
      //   this.logger.log(`error: ${JSON.stringify(error)}`);
      //   if (error instanceof TimeoutError) {
      //     return throwError(() => new RequestTimeoutException());
      //   }
      //   return throwError(() => error);
      // }),
    );
  }
}
