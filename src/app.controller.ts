import {
  Controller,
  Get,
  Inject,
  Param,
  UseFilters,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';
import { TestService } from './test/test.service';
import { MapTestInterceptor } from './map-test.interceptor';
import { TapTestInterceptor } from './tap-test.interceptor';

// import { LoginGuard } from './login.guard';
// import { TimeInterceptor } from './time.interceptor';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('person') private readonly person: { name: string; age: number },
    @Inject('person2') private readonly person2: { name: string; age: number },
  ) {}

  @Inject(TestService)
  private readonly testService: Record<string, any>;

  @Get()
  @UseInterceptors(MapTestInterceptor)
  @UseInterceptors(TapTestInterceptor)
  getHello(): string {
    // console.log(this.person, this.person2);
    console.log(this.testService.name, this.testService.testFn());
    return this.appService.getHello();
  }

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
