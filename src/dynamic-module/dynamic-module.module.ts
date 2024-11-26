import { DynamicModule, Module } from '@nestjs/common';
import { DynamicModuleService } from './dynamic-module.service';
import { DynamicModuleController } from './dynamic-module.controller';

@Module({})
export class DynamicModuleModule {
  static register(options: Record<string, any>): DynamicModule {
    return {
      module: DynamicModuleModule,
      providers: [
        DynamicModuleService,
        {
          provide: 'options',
          useValue: options,
        },
      ],
      controllers: [DynamicModuleController],
      exports: [],
      // imports: [options.imports],
    };
  }
}
