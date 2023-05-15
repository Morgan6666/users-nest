import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { PolisDMS } from 'domain/models/PolisDMS';

export class PolisVM {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User email',
    example: 'test@mail.ru',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Insures company',
    example: 'insurence company',
  })
  insurence_company: string;

  @IsString()
  @ApiProperty({
    description: 'Insures name',
    example: 'insurence surename',
  })
  insurence_surename: string;

  @IsString()
  @ApiProperty({
    description: 'Polis number',
    example: '48848488448',
  })
  polis_number: string;

  static fromViewModel(vm: PolisVM): PolisDMS {
    return new PolisDMS(
      vm.email,
      vm.insurence_company,
      vm.insurence_surename,
      vm.polis_number,
    );
  }
}
