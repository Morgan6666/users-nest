import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { AddDoctorPatientRecordModel } from 'domain/models/AddDoctorPatientRecordModel';

export class AddDoctorPatientRecordVM {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Patient email',
    example: 'test@mail.ru',
  })
  patient_email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Doctor email',
    example: 'db@mail.ru',
  })
  doctor_email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Time receipt',
    example: '2929290202',
  })
  time_receipt: string;

  static fromViewModel(
    vm: AddDoctorPatientRecordVM,
  ): AddDoctorPatientRecordModel {
    return new AddDoctorPatientRecordModel(
      vm.patient_email,
      vm.doctor_email,
      vm.time_receipt,
    );
  }
}
