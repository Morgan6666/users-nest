import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiUnprocessableEntityResponse,
} from '@nestjs/swagger';
import { UserMetaUsecase } from 'application/use-cases/UserMetaUsecase';
import { DoctorMetaModel } from 'domain/models/DoctorMetaModel';
import { BadRequestError } from 'presentation/errors/BadRequestError';
import { UnprocessableEntityError } from 'presentation/errors/UnprocessableEntityError';
import { DoctorEducationVM } from 'presentation/view-models/meta/DoctorEducationVM';
import { DoctorMetaVM } from 'presentation/view-models/meta/DoctorMetaVM';
import { DoctorTrainingVM } from 'presentation/view-models/meta/DoctorTrainingVM';
import { UserMetaVM } from 'presentation/view-models/meta/UserMetaVM';

@ApiTags('Meta')
@Controller('meta')
export class UserMetaController {
  constructor(private readonly userMetaUsecase: UserMetaUsecase) {}

  @Post('add')
  @ApiOperation({
    summary: 'Add user meta',
  })
  @ApiResponse({ description: 'Meta add successfully', type: UserMetaVM })
  @ApiBadRequestResponse({
    description: 'The request object doesnt th expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while login user',
    type: UnprocessableEntityError,
  })
  async addUserMeta(@Body() userMeta: UserMetaVM) {
    const metaResult = await this.userMetaUsecase.addUserMeta(
      UserMetaVM.fromViewModel(userMeta),
    );

    return metaResult;
  }

  @Post('docInfo')
  @ApiOperation({
    summary: 'Add doctor meta information',
  })
  @ApiResponse({ description: 'Meta add successfully', type: DoctorMetaVM })
  @ApiBadRequestResponse({
    description: 'The request object doesnt th expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while login user',
    type: UnprocessableEntityError,
  })
  async addDoctorInfo(@Body() doctorMeta: DoctorMetaVM) {
    const docMeta = await this.userMetaUsecase.addDoctorMeta(
      DoctorMetaVM.fromViewModel(doctorMeta),
    );
    return docMeta;
  }

  @Post('train')
  @ApiOperation({
    summary: 'Add doctor training',
  })
  @ApiResponse({ description: 'Meta add successfully', type: DoctorTrainingVM })
  @ApiBadRequestResponse({
    description: 'The request object doesnt th expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while login user',
    type: UnprocessableEntityError,
  })
  async addDoctorTraining(@Body() doctorTraining: DoctorTrainingVM) {
    const docTraining = await this.userMetaUsecase.addDoctorTraining(
      DoctorTrainingVM.fromViewModel(doctorTraining),
    );
    return docTraining;
  }

  @Post('edu')
  @ApiOperation({
    summary: 'Add doctor education',
  })
  @ApiResponse({
    description: 'Education add successfully',
    type: DoctorEducationVM,
  })
  @ApiBadRequestResponse({
    description: 'The request object doesnt th expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while login user',
    type: UnprocessableEntityError,
  })
  async addDocEducation(@Body() doctorEducation: DoctorEducationVM) {
    const docEdu = await this.userMetaUsecase.addDoctorEducation(
      DoctorEducationVM.fromViewModel(doctorEducation),
    );
    return docEdu;
  }
}
