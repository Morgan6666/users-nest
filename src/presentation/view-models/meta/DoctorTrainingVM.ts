import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { DoctorTrainingModel } from 'domain/models/DoctorTraining';

export class DoctorTrainingVM {
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
    description: 'Название курса повушения квалификации',
    example: 'Мед бро',
  })
  training_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Университет окончания',
    example: 'Первый медицинский университет',
  })
  university: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Год окончания',
    example: 'Год обучения',
  })
  year: string;

  static fromViewModel(vm: DoctorTrainingVM): DoctorTrainingModel {
    return new DoctorTrainingModel(
      vm.email,
      vm.training_name,
      vm.university,
      vm.year,
    );
  }
}
