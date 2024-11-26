import { IsInt } from 'class-validator';

export class PipeDto {
  name: string;
  @IsInt()
  age: number;
  sex: boolean;
}
