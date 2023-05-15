import {
  Controller,
  Param,
  Get,
  Post,
  Body,
  Logger,
  Req,
  Patch,
  UseGuards,
  Put,
} from '@nestjs/common';
import {
  ApiTags,
  ApiParam,
  ApiOperation,
  ApiCreatedResponse,
  ApiUnprocessableEntityResponse,
  ApiBadRequestResponse,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiResponse,
  ApiProperty,
} from '@nestjs/swagger';

import { UsersUseCases } from 'application/use-cases/UsersUseCases';
import { CreateUserVM } from 'presentation/view-models/users/CreateUserVM';
import { UserVM } from 'presentation/view-models/users/UserVM';
import { BadRequestError } from 'presentation/errors/BadRequestError';
import { UnprocessableEntityError } from 'presentation/errors/UnprocessableEntityError';

import { UserLoginVM } from 'presentation/view-models/users/UserLoginVM';
import { GetUserVM } from 'presentation/view-models/users/GetUserVM';
import { GetPatientsByEmailVM } from 'presentation/view-models/users/GetPatientsByEmailVM';
import { GetDoctorsByEmailVM } from 'presentation/view-models/users/GetDoctorsByEmailVM';
import { ChangePasswordVM } from 'presentation/view-models/users/ChangePasswordVM';
import { posixSync } from 'rimraf';

import { Request } from 'express';
import { JwtTokenModel } from 'domain/models/JwtToken';
import { UsersModule } from 'infrastructure/ioc/users.module';
import { AddDoctorPatientRecordModel } from 'domain/models/AddDoctorPatientRecordModel';
import { AddDoctorPatientRecordVM } from 'presentation/view-models/users/AddDoctorPatientRecordVM';
import { AddRecipeVM } from 'presentation/view-models/users/AddRecipeVM';
import { User } from 'domain/models/User';
import { UserInfoModel } from 'domain/models/UserLastFirstNameModel';
import { throws } from 'assert';
const requestIp = require('request-ip');

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersUseCases: UsersUseCases) {}

  @Post('sign')
  @ApiOperation({
    summary: 'Sign User',
  })
  @ApiResponse({ description: 'User successfull sign', type: UserVM })
  @ApiBadRequestResponse({
    description: 'The request object doesn`t match the expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation errro while sign user',
    type: UnprocessableEntityError,
  })
  async sign(@Body() createUser: CreateUserVM, @Req() request: Request) {
    const useragent = request.headers['user-agent'];
    const newUser = await this.usersUseCases.sign(
      CreateUserVM.fromViewModel(createUser),
      useragent,
    );
    return newUser;
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login User',
  })
  @ApiResponse({ description: 'User successfull login', type: UserLoginVM })
  @ApiBadRequestResponse({
    description: 'The request object doesnt th expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while login user',
    type: UnprocessableEntityError,
  })
  async login(@Body() loginUser: UserLoginVM) {
    const userLogin = await this.usersUseCases.login(
      UserLoginVM.fromViewModel(loginUser),
    );
    return userLogin;
  }

  @Post('info')
  @ApiOperation({
    summary: 'User info',
  })
  @ApiResponse({ description: 'User successfully', type: GetUserVM })
  @ApiBadRequestResponse({
    description: 'The request object doesnt th expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while login user',
    type: UnprocessableEntityError,
  })
  async userInfo(@Body() userInfo: GetUserVM) {
    const info = await this.usersUseCases.getUserByEmai(
      GetUserVM.fromViewModel(userInfo),
    );
    return info;
  }

  @Patch('logout')
  async logout(@Req() request: Request) {
    const useragent = request.headers['user-agent'];
    const result = await this.usersUseCases.logout(useragent);
    return result;
  }

  @Post('patients')
  @ApiOperation({
    summary: 'Doctors patients',
  })
  @ApiResponse({
    description: 'Patients successfully',
    type: GetPatientsByEmailVM,
  })
  @ApiBadRequestResponse({
    description: 'The request object doesnt th expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while login user',
    type: UnprocessableEntityError,
  })
  async getPatientsDoctorByEmail(@Body() patientsInfo: GetPatientsByEmailVM) {
    const info = await this.usersUseCases.getPatientsByEmail(
      GetPatientsByEmailVM.fromViewModel(patientsInfo),
    );
    return info;
  }

  @Post('doctors')
  @ApiOperation({
    summary: 'All doctors from patients',
  })
  @ApiResponse({
    description: 'Doctors successfully',
    type: GetDoctorsByEmailVM,
  })
  @ApiBadRequestResponse({
    description: 'The request object doesnt th expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while login user',
    type: UnprocessableEntityError,
  })
  async getDoctorByEmail(@Body() doctorsInfo: GetDoctorsByEmailVM) {
    const info = await this.usersUseCases.getDoctorsByEmail(
      GetDoctorsByEmailVM.fromViewModel(doctorsInfo),
    );
    return info;
  }

  @Post('change')
  @ApiOperation({
    summary: 'Change password',
  })
  @ApiResponse({
    description: 'Change password successfully',
    type: GetDoctorsByEmailVM,
  })
  @ApiBadRequestResponse({
    description: 'The request object doesnt th expected one',
    type: BadRequestError,
  })
  @ApiUnprocessableEntityResponse({
    description: 'Validation error while email user',
    type: UnprocessableEntityError,
  })
  async changePassword(@Body() userInfo: ChangePasswordVM) {
    const result = await this.usersUseCases.changePassword(
      ChangePasswordVM.fromViewModel(userInfo),
    );
    return result;
  }
  @Get('doc_info')
  async getAllDoctorInfo() {
    const result = await this.usersUseCases.getAllDoctorsInfo();
    return result;
  }

  @Post('patient_meta')
  async getPatientMetaByEmail(@Body() user: GetPatientsByEmailVM) {
    const result = await this.usersUseCases.getPatientMetaByEmail(
      GetPatientsByEmailVM.fromViewModel(user),
    );
    return result;
  }

  @Patch('refresh')
  async refresToken(@Req() request: Request) {
    const token = request.headers['access-token'].toString();
    const result = await this.usersUseCases.updateAccessToken(token);
    return result;
  }

  @Post('user_id')
  async getUserIdByEmail(@Body() data: GetUserVM) {
    const result = await this.usersUseCases.getUserIdByEmail(
      GetUserVM.fromViewModel(data),
    );
    return result;
  }

  @Post('patient_meta_info')
  @ApiOperation({
    summary: 'Get patient meta info by email',
  })
  async getPatientMetaInfoByEmail(@Body() email: GetUserVM) {
    const result = await this.usersUseCases.getPatientMetaByEmail(
      GetUserVM.fromViewModel(email),
    );
    return result;
  }

  @Post('add_record')
  @ApiOperation({
    summary: 'Add doctor record',
  })
  async addPatientRecord(@Body() data: AddDoctorPatientRecordVM) {
    const result = await this.usersUseCases.addDoctorPatientRecord(
      AddDoctorPatientRecordVM.fromViewModel(data),
    );
    return result;
  }

  @Post('get_patient_records')
  @ApiOperation({
    summary: 'Get patients records',
  })
  async getPatientRecords(@Body() email: GetUserVM) {
    console.log('Patients');
    const result = await this.usersUseCases.getAllPatientRecords(
      GetUserVM.fromViewModel(email),
    );
    return result;
  }

  @Post('get_doctors_records')
  @ApiOperation({
    summary: 'Get patients records',
  })
  async getDoctorRecords(@Body() email: GetUserVM) {
    const result = await this.usersUseCases.getAllDoctorsRecords(
      GetUserVM.fromViewModel(email),
    );
    return result;
  }

  @Post('add_recipe')
  @ApiOperation({
    summary: 'Add recipe',
  })
  async addRecipe(@Body() data: AddRecipeVM) {
    const result = await this.usersUseCases.addRecipe(
      AddRecipeVM.formViewModel(data),
    );
    return result;
  }

  @Post('get_recipe_doctor')
  @ApiOperation({
    summary: 'Get recipe by doctor email',
  })
  async getRecipeByDoctorEmail(@Body() data: GetUserVM) {
    const result = await this.usersUseCases.getRecipeByDoctorEmail(
      GetUserVM.fromViewModel(data),
    );
    return result;
  }

  @Post('get_recipe_user')
  @ApiOperation({
    summary: 'Get recipes by user email',
  })
  async getRecipeByUserEmail(@Body() data: GetUserVM) {
    const result = await this.usersUseCases.getRecipeByUserEmail(
      GetUserVM.fromViewModel(data),
    );
    return result;
  }

  @Post('get_doc_id_by_email')
  @ApiOperation({
    summary: 'Get doctor id by email',
  })
  async getDoctorIdByEmail(@Body() data: GetUserVM) {
    const result = await this.usersUseCases.getDoctorIdByEmail(
      GetUserVM.fromViewModel(data),
    );
    return result;
  }

  @Post('get_patients')
  @ApiOperation({
    summary: 'Get patient id by email',
  })
  async getPatientByDocEmail(@Body() data: GetUserVM) {
    const result = await this.usersUseCases.getPatientsId(
      GetUserVM.fromViewModel(data),
    );
    return result;
  }

  @Post('user_by_id')
  @ApiOperation({
    summary: 'Get user info by id',
  })
  async getUserInfoById(@Body() data: User) {
    const result = await this.usersUseCases.getUserInfoById(data);
    return result;
  }

  @Post('get_id_by_name')
  @ApiOperation({
    summary: 'Get user id by first/last-name',
  })
  async getUserInfo(@Body() data: UserInfoModel) {
    const result = await this.usersUseCases.getUserInfo(data);
    return result;
  }

  @Post('list_user_info')
  @ApiOperation({
    summary: 'Get user info by list id',
  })
  async getArrayUserInfo(@Body() data: Array<User>) {
    const result = await this.usersUseCases.getListUserInfo(data);
    return result;
  }

  @Post('list_doctor_info')
  @ApiOperation({
    summary: 'Get list doctor info',
  })
  async getArrayDoctorInfo(@Body() data: Array<User>) {
    const result = await this.usersUseCases.getListDoctorInfo(data);
    return result;
  }
}
