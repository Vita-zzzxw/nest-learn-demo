import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

// Pipe 是管道的意思，用来对参数做一些检验和转换
@Injectable()
export class ValidatePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if (Number.isNaN(parseInt(value))) {
      throw new BadRequestException(`参数${metadata.data}错误`);
    }
    const res = typeof value === 'number' ? value * 10 : parseInt(value) * 10;
    return res;
  }
}
