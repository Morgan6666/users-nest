import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { UserDocumentsModels } from 'domain/models/UserDocuments';

export class UserDocumentsVM {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User email',
    example: 'test@mail.ru',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'PolisOms',
    example: '4111111111',
  })
  polisOms: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Snils',
    example: '4774747477474',
  })
  snils: string;

  static fromViewModel(vm: UserDocumentsVM): UserDocumentsModels {
    return new UserDocumentsModels(vm.email, vm.polisOms, vm.snils);
  }
}
