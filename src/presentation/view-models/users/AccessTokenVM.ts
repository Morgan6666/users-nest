import { ApiProperty } from '@nestjs/swagger';
import { plainToClass, Expose } from 'class-transformer';
import { SignRes } from 'domain/models/SignRes';

export class SignVM {
  @Expose()
  @ApiProperty({
    description: 'The id of the user',
    example: 1,
  })
  id: number;

  static toViewModel(sign: SignRes): SignVM {
    return plainToClass(SignVM, sign, { excludeExtraneousValues: true });
  }
}
