import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsEmail,
  IsNumber,
  IsBoolean,
} from 'class-validator';

import { UserMeta } from 'domain/models/UserMeta';
import { isInteger } from 'lodash';

export class UserMetaVM {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'User id',
    example: '1',
  })
  user_id: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Client allergy',
    example: 'Новокаин',
  })
  allergy: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Allergy reactions',
    example: 'Сыпь',
  })
  allergyReactions: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Client smoke',
    example: 'true',
  })
  smoke: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Client graft',
    example: '',
  })
  graft: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Chronick disease',
    example: 'Мочеполовая дистония',
  })
  chronickDisease: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'operations',
    example: 'Операции',
  })
  operation: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'injures',
    example: '',
  })
  injures: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Eatings habbits',
    example: 'Курочка',
  })
  eatings_habbit: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'height',
    example: '180',
  })
  height: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'weight',
    example: '180.90',
  })
  weight: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'blood group',
    example: '0',
  })
  blood_group: number;

  static fromViewModel(vm: UserMetaVM): UserMeta {
    return new UserMeta(
      vm.user_id,
      vm.allergy,
      vm.allergyReactions,
      vm.smoke,
      vm.graft,
      vm.chronickDisease,
      vm.operation,
      vm.injures,
      vm.eatings_habbit,
      vm.height,
      vm.weight,
      vm.blood_group,
    );
  }
}
