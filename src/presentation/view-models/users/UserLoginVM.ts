import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

import { Login } from 'domain/models/Login';

export class UserLoginVM {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'User email',
    example: 'test@mail.ru',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User password',
    example: 'btgbfhvbfhvbfhfjvjf',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User category',
    example: 'doctor or user',
  })
  category?: string;

  static fromViewModel(vm: UserLoginVM): Login {
    return new Login(vm.email, vm.password, vm.category);
  }
}
