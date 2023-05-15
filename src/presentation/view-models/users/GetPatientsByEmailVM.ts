import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

import { GetUserModel } from 'domain/models/GetUserModel';

export class GetPatientsByEmailVM {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Patients email',
    example: 'test@mail.ru',
  })
  email: string;

  static fromViewModel(vm: GetPatientsByEmailVM): GetUserModel {
    return new GetUserModel(vm.email);
  }
}
