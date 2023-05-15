import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

import { GetUserModel } from 'domain/models/GetUserModel';

export class GetDoctorsByEmailVM {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Doctors email',
    example: 'test@mail.ru',
  })
  email: string;

  static fromViewModel(vm: GetDoctorsByEmailVM): GetUserModel {
    return new GetUserModel(vm.email);
  }
}
