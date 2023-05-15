import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { DoctorEducationModel } from 'domain/models/DoctorEducationModel';
import { DoctorMetaModel } from 'domain/models/DoctorMetaModel';

export class DoctorEducationVM {
  @IsString()
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Doctor email',
    example: 'db@mail.ru',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Education university',
    example: 'Первый медицинский университет',
  })
  university: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Year',
    example: 'Год окончания обучения',
  })
  year: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Education department',
    example: 'Хирургическое отделение',
  })
  department: string;

  static fromViewModel(vm: DoctorEducationVM): DoctorEducationModel {
    return new DoctorEducationModel(
      vm.email,
      vm.university,
      vm.year,
      vm.department,
    );
  }
}
