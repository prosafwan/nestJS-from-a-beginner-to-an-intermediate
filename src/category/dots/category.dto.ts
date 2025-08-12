/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  name: string;

  @IsString()
  @MaxLength(50, { message: 'Description must not exceed 50 characters' })
  description?: string;
}
