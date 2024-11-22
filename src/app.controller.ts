import { Controller, Get, Inject, Param, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';
// import { LoginGuard } from './login.guard';
// import { TimeInterceptor } from './time.interceptor';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('person') private readonly person: { name: string; age: number },
    @Inject('person2') private readonly person2: { name: string; age: number },
  ) {}

  @Get()
  getHello(): string {
    console.log(this.person, this.person2);
    return this.appService.getHello();
  }

  @Get(':id')
  // 守卫
  // @UseGuards(LoginGuard)
  // 拦截器
  // @UseInterceptors(TimeInterceptor)
  // 管道
  // 异常
  @UseFilters(TestFilter)
  aaa(@Param('id', ValidatePipe) id: number): number {
    return id - 2;
  }
}
