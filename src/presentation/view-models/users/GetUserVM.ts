import { ApiProperty } from '@nestjs/swagger';
import { plainToClass, Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

import { GetUserModel } from 'domain/models/GetUserModel';
import e from 'express';

export class GetUserVM {
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'User email',
    example: 'test@mail.ru',
  })
  email: string;

  patient_email: string;

  static fromViewModel(vm: GetUserVM): GetUserModel {
    if (vm.patient_email != 'undefined') {
      return new GetUserModel(vm.email, vm.patient_email);
    } else {
      return new GetUserModel(vm.email);
    }
  }
}
