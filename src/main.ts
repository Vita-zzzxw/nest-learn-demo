import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { NextFunction, Request, Response } from 'express';
// import { LoginGuard } from './login.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets('public', { prefix: '/static' });

  // 全局中间件
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log(req.url, 'before');
    next();
    console.log('after');
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  });

  // app.useGlobalGuards(new LoginGuard());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
