import { Get, Controller, Inject } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';

@Controller('dynamic')
export class DynamicModuleController {
  constructor(
    private readonly dynamicModuleService: DynamicModuleService,
    @Inject('options') private options: Record<string, any>,
  ) {}

  @Get()
  getDynamic() {
    console.log(this.options, 'options');
    return this.options;
  }
}
