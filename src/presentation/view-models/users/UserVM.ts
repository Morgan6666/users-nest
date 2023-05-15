import { ApiProperty } from '@nestjs/swagger';
import { plainToClass, Expose } from 'class-transformer';

import { User } from 'domain/models/User';

export class UserVM {
  @Expose()
  @ApiProperty({
    description: 'The id of the user',
    example: 1,
  })
  id: number;

  static toViewModel(user: User): UserVM {
    return plainToClass(UserVM, user, { excludeExtraneousValues: true });
  }
}
