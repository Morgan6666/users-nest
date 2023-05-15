import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { AddRecipeModel } from 'domain/models/AddRecipeModel';

export class AddRecipeVM {
  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'Patient email',
    example: 'test@mail.ru',
  })
  patient_email: string;

  @IsString()
  @IsEmail()
  @ApiProperty({
    description: 'Doctor email',
    example: 'test@mail.ru',
  })
  doctor_email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Drug name',
    example: 'Новокаин',
  })
  drug_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Clinics name',
    example: 'Городская клиническая больница',
  })
  clinics_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Date recipe expire at',
    example: '1110110',
  })
  expire_at: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Date of validiry',
    example: '377373373',
  })
  validiry: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Recipe type',
    example: 'За полную стоимость',
  })
  type_recipe: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Mode of duration',
    example: 'Обычный',
  })
  mode_duration: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Doze count',
    example: '2',
  })
  doze_count: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Doze per day',
    example: '1',
  })
  doze_per_day: number;

  static formViewModel(vm: AddRecipeVM): AddRecipeModel {
    return new AddRecipeModel(
      vm.patient_email,
      vm.doctor_email,
      vm.clinics_name,
      vm.drug_name,
      vm.expire_at,
      vm.validiry,
      vm.type_recipe,
      vm.mode_duration,
      vm.doze_count,
      vm.doze_per_day,
    );
  }
}
