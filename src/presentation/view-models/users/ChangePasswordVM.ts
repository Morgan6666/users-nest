import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ChangePasswordModel } from 'domain/models/ChangePasswordModel';

export class ChangePasswordVM {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Email',
    example: 'db@mail.ru',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User password',
    example: 'huy1234',
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'New password',
    example: 'huy123',
  })
  newPassword;

  category?: string;

  static fromViewModel(vm: ChangePasswordVM): ChangePasswordModel {
    if (vm.category != 'undefined') {
      return new ChangePasswordModel(
        vm.email,
        vm.password,
        vm.newPassword,
        vm.category,
      );
    } else {
      return new ChangePasswordModel(vm.email, vm.password, vm.newPassword);
    }
  }
}
