import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { DoctorMetaModel } from 'domain/models/DoctorMetaModel';

export class DoctorMetaVM {
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'Doctor email',
    example: 'db@mail.ry',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Doctor experince',
    example: '10',
  })
  experience: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Doctor category',
    example: 'Высшая категория',
  })
  category: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Place of work',
    example: 'Городска больница',
  })
  place_of_work: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'University',
    example: 'Первый медицинский университет',
  })
  university: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Doctor specialisation',
    example: 'Лечебное дело',
  })
  specialisation: string;

  training_name?: string;

  static fromViewModel(vm: DoctorMetaVM): DoctorMetaModel {
    if (vm.training_name != 'undefined') {
      return new DoctorMetaModel(
        vm.email,
        vm.experience,
        vm.category,
        vm.place_of_work,
        vm.university,
        vm.specialisation,
        vm.training_name,
      );
    } else {
      return new DoctorMetaModel(
        vm.email,
        vm.experience,
        vm.category,
        vm.place_of_work,
        vm.university,
        vm.specialisation,
      );
    }
  }
}
