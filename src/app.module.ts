import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
// import { APP_GUARD } from '@nestjs/core';
// import { LoginGuard } from './login.guard';

@Module({
  imports: [PersonModule],
  controllers: [AppController],
  providers: [
    AppService,
    // 当需要注入别的 provider 的时候，需要这种全局 Guard 的声明方式
    // {
    //   provide: APP_GUARD,
    //   useClass: LoginGuard,
    // },
    {
      provide: 'person',
      useValue: {
        name: 'John',
        age: 20,
      },
    },
    {
      provide: 'person2',
      useFactory() {
        return {
          name: 'zhu',
          age: 26,
        };
      },
    },
  ],
})
export class AppModule {}
