import { Injectable, Logger } from '@nestjs/common';

import { IUsersRepository } from 'application/ports/IUsersRepository';
import { UserExceptions } from 'domain/exceptions/UserExceptions';
import { ChangePasswordModel } from 'domain/models/ChangePasswordModel';
import { GetUserModel } from 'domain/models/GetUserModel';
import { Login } from 'domain/models/Login';
import { User } from 'domain/models/User';
import { ServiceResponse } from 'infrastructure/utils/ServiceResponse';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { salt } from 'infrastructure/utils/secretsConstant';
import { ConfigService } from '@nestjs/config';
import { JwtTokenModel } from 'domain/models/JwtToken';
import Redis from 'ioredis';
import { InjectRedis, RedisModule } from '@liaoliaots/nestjs-redis';
import { AddDoctorPatientRecordModel } from 'domain/models/AddDoctorPatientRecordModel';
import { RecipeModel } from 'domain/models/RecipeModel';
import { AddRecipeModel } from 'domain/models/AddRecipeModel';
import { GetClinicsByNameModel } from 'domain/models/GetClinicsNameModel';
import { GetDrugByNameModel } from 'domain/models/GetDrugByNameModel';
import { ClinicsModel } from 'domain/models/ClinicsModel';
import { DrugsModel } from 'domain/models/DrugsModel';
import { runInThisContext } from 'vm';
import { List, result } from 'lodash';
import { UserInfoModel } from 'domain/models/UserLastFirstNameModel';

@Injectable()
export class UsersUseCases {
  private readonly logger = new Logger(UsersUseCases.name);
  public userException = new UserExceptions();
  public serviceRes = new ServiceResponse();
  private configService: ConfigService;
  constructor(
    private readonly usersRepository: IUsersRepository,
    private jwtService: JwtService,

    @InjectRedis() private readonly redis: Redis,
  ) {}

  async sign(user: User, user_agent: string) {
    if (user.category == 'user') {
      const userResult = await this.signUser(user, user_agent);
      return userResult;
    } else if (user.category == 'doctor') {
      const doctorResult = await this.signDoctor(user);
      return doctorResult;
    }
  }

  async signDoctor(user: User) {
    const checkDoctor = await this.usersRepository.getDoctor(user);
    this.logger.log(`Check if doctor exist:${checkDoctor}`);
    if (!checkDoctor) {
      this.logger.log(`Create new doctor:${user.email}`);
      user.password = await bcrypt.hash(user.password, salt);
      const result = await this.usersRepository.signDoctor(user);
      const tokens = await this.calculateTokens(result);

      return this.serviceRes.uniqueSuccessRes(tokens);
    } else {
      this.logger.log(`doctor already exists:${user.email}`);
      return this.serviceRes.doctorAlreadyExists();
    }
  }
  async calculateTokens(user: JwtTokenModel) {
    const access_token = await this.jwtService.signAsync(user, {
      expiresIn: '15m',
    });
    const refresh_token = await this.jwtService.signAsync(user, {
      expiresIn: '7d',
    });
    return { access_token, refresh_token };
  }

  async signUser(user: User, user_agent: string) {
    const checkUser = await this.usersRepository.getUser(user);
    this.logger.log(`Check if user exiss:${checkUser}`);
    if (!checkUser) {
      this.logger.log(`Create new user:${user.email}`);
      let encrPassword = await bcrypt.hash(user.password, salt);
      user.password = encrPassword;
      const result = await this.usersRepository.signUser(user);
      const tokens = await this.calculateTokens(result);
      const red = await this.redis.set(user_agent, tokens.refresh_token);
      return this.serviceRes.uniqueSuccessRes(tokens);
    } else {
      this.logger.log(`user already exists:${user.email}`);
      return this.serviceRes.userAlreadyExist();
    }
  }

  async loginUser(user: Login) {
    const checkUser = await this.usersRepository.getUser(user);
    if (!checkUser) {
      this.logger.warn(`Пользователь не найден:${user.email}`);
      return this.serviceRes.userNotFound();
    } else {
      const isMatch = await bcrypt.compare(user.password, checkUser.password);
      if (isMatch) {
        this.logger.log(`Пользователь ${user.email} вошёл в систему`);
        const tokens = await this.calculateTokens(checkUser);
        return this.serviceRes.uniqueSuccessRes({
          access_token: tokens.access_token,
        });
      } else {
        this.logger.log('Пароли не совпадают');
        return this.serviceRes.passwordMismatch();
      }
    }
  }
  async loginDoctor(user: Login) {
    const checkDoctor = await this.usersRepository.getDoctor(user);
    if (!checkDoctor) {
      this.logger.warn(`Доктор не найден:${user.email}`);
      return this.serviceRes.doctorDoesntExists();
    } else {
      const isMatch = await bcrypt.compare(user.password, checkDoctor.password);
      if (isMatch) {
        this.logger.log(`Пользователь ${user.email} вошёл в систему`);
        const tokens = await this.calculateTokens(checkDoctor);
        return this.serviceRes.uniqueSuccessRes({
          access_token: tokens.access_token,
        });
      } else {
        this.logger.log('Пароли не совпадают');
        return this.serviceRes.passwordMismatch();
      }
    }
  }

  async logout(user_agent: string) {
    this.logger.log('Проверяем наличие сессии пользователя в redis');
    const checkTokenRedis = await this.redis.get(user_agent);
    if (checkTokenRedis) {
      this.logger.log('Удаляем сессию пользователя');
      const delSession = await this.redis.del(user_agent);
      return this.serviceRes.usersSessionSuccessDelete();
    } else {
      this.logger.log('Сессия пользователя не существует');
      return this.serviceRes.userSessionNotFound();
    }
  }

  async login(user: Login) {
    this.logger.log('User login');
    if (user.category == 'user') {
      const resultUser = await this.loginUser(user);
      return resultUser;
    } else if (user.category == 'doctor') {
      const resultDoctor = await this.loginDoctor(user);
      return resultDoctor;
    }
  }

  async getUserByEmai(user: GetUserModel) {
    this.logger.log('GetUser by email');
    const result = await this.usersRepository.getUserByEmail(user);
    if (!result) {
      this.logger.warn(`Пользователь не найден:${result}`);
      return this.serviceRes.userNotFound();
    } else {
      this.logger.log(`Пользователь:${user.email}`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
  }

  async getPatientsByEmail(user: GetUserModel) {
    this.logger.log('Get pations by email');
    console.log(user);
    const result = await this.usersRepository.getPatientsByEmail(user);
    if (!result) {
      this.logger.warn(`Пациенты не найдены:${result}`);
      return this.serviceRes.patientsNotFound();
    } else {
      this.logger.log(`Получем путь к изображению`);
      const imgPath = await this.usersRepository.getPatientImagePathById(
        result,
      );
      if (imgPath) {
        this.logger.log(`Добавляем пути файлов`);
        let patient_info_arr = [];

        result.forEach((u, index) => {
          const path = imgPath[index];
          patient_info_arr.push({
            first_name: u.first_name,
            last_name: u.last_name,
            email: u.email,
            path: path.file_path,
          });
        });
        return this.serviceRes.uniqueSuccessRes(patient_info_arr);
      } else {
        this.logger.error('Сервис storage не доступен');
        return this.serviceRes.serviceStorageError();
      }
    }
  }

  async getDoctorsByEmail(user: GetUserModel) {
    this.logger.log('Get doctors by email');
    const result = await this.usersRepository.getDoctorsByEmail(user);
    if (!result) {
      this.logger.warn(`Доктора не найдены:${result}`);
      return this.serviceRes.doctorDoesntExists();
    } else {
      this.logger.log('Спосок докторов найден');
      return this.serviceRes.uniqueSuccessRes(result);
    }
  }

  async changePassword(user: ChangePasswordModel) {
    if (user.category == 'user') {
      const changeUser = await this.changePasswordUser(user);
      return changeUser;
    } else if (user.category == 'doctor') {
      const changeDoctor = await this.changePasswordDoctor(user);
      return changeDoctor;
    }
  }

  async changePasswordUser(user: ChangePasswordModel) {
    const checkUser = await this.usersRepository.getUser(user);
    this.logger.log(`Пользователь(-смена пароля-):${checkUser}`);
    if (checkUser != null) {
      this.logger.log(`Пользователь существует:${checkUser.email}`);
      const isMatch = await bcrypt.compare(user.password, checkUser.password);

      if (isMatch) {
        this.logger.log(`Пароль пользователя совпадает`);
        const result = await this.usersRepository.changePasswordUser(user);
        return this.serviceRes.passwordSuccessUpdate();
      }
    } else {
      this.logger.log(`Пользователь ${user.email} не найден`);
      return this.serviceRes.passwordMismatch();
    }
  }

  async changePasswordDoctor(user: ChangePasswordModel) {
    const checkUser = await this.usersRepository.getDoctor(user);
    this.logger.log(`Пользователь доктор(-смена пароля-):${checkUser}`);
    if (checkUser != null) {
      this.logger.log(`Пользователь доктор существует:${checkUser.email}`);
      const isMatch = await bcrypt.compare(user.password, checkUser.password);
      if (isMatch) {
        this.logger.log(`Пароль пользователя совпадает`);
        const result = await this.usersRepository.changePasswordDoctor(user);
        return this.serviceRes.passwordSuccessUpdate();
      }
    } else {
      this.logger.log(`Пользователь ${user.email} не найден`);
      return this.serviceRes.passwordMismatch();
    }
  }

  async getAllDoctorsInfo() {
    this.logger.log(`Получаем информацию по всем докторам`);
    const result = await this.usersRepository.getAllDoctorsInfo();
    let user_id_arr = [];
    if (!result) {
      this.logger.warn(`Информацию по докторам не найдена`);
      return this.serviceRes.doctorDoesntExists();
    } else {
      this.logger.log(`Информация по докторам получена`);

      for (let i = 0; i < result.length; i++) {
        user_id_arr.push({
          user_id: result[i].user_id,
        });
      }
      const imagePath = await this.usersRepository.getDoctorImagePath(
        user_id_arr,
      );
      if (!imagePath) {
        this.logger.error(`Сервис storage-nest не доступен`);
        return this.serviceRes.serviceStorageError();
      } else {
        this.logger.log(`Получен результат с сервиса storage`);
        let doctor_info_arr = [];
        result.forEach((cat, index) => {
          const path = imagePath[index];
          console.log('Путь', path);
          doctor_info_arr.push({
            first_name: cat.first_name,
            last_name: cat.last_name,
            email: cat.email,
            experience: cat.experience,
            place_of_work: cat.place_of_work,
            category_name: cat.category_name,
            university: cat.university_name,
            training_name: cat.training_name,
            training_year: cat.year,
            image_path: path.file_path,
          });
        });

        return this.serviceRes.uniqueSuccessRes(doctor_info_arr);
      }
    }
  }

  async updateAccessToken(token: string) {
    const result = this.jwtService.decode(token);
    return this.serviceRes.uniqueSuccessRes({
      access_token: await this.jwtService.signAsync(
        { id: result['id'] },
        {
          expiresIn: '15m',
        },
      ),
      refresh_token: token,
    });
  }

  async getPatientMetaByEmail(entety: User) {
    this.logger.log(`Получаем информацию по пациенту:${entety.email}`);
    const result = await this.usersRepository.getPatientMetaByEmail(entety);
    if (!result) {
      this.logger.warn(`Информация по пациенту не найдена`);
      return this.serviceRes.patietnInfoNotFound();
    } else {
      this.logger.log(`Информация по пациенту получена`);
      return this.serviceRes.uniqueSuccessRes(result);
    }
  }

  async getUserIdByEmail(entity: User) {
    this.logger.log(`Получаем информацию о пользователе`);
    const result = await this.usersRepository.getUserIdByEmail(entity);
    if (!result) {
      this.logger.warn(`Пользователь не найден`);
      return this.serviceRes.userNotFound();
    }
    return this.serviceRes.uniqueSuccessRes(result);
  }

  async getPatientInfoByEmail(entity: User) {
    this.logger.log('Получаем метаданные по пациенту');
    const result = await this.usersRepository.getPatientInfoByEmail(entity);
    if (result) {
      this.logger.log('Метаинформация получена');
      return this.serviceRes.uniqueSuccessRes(result);
    } else {
      this.logger.log('Метаинформация по пользователю не найдена');
      return this.serviceRes.userMetaNotFound();
    }
  }
  async addDoctorPatientRecord(entity: AddDoctorPatientRecordModel) {
    this.logger.log('Проверяем наличие пользователя и врача в бд');
    const result = await this.usersRepository.checkDoctorAndPatientExists(
      entity,
    );
    if (result) {
      this.logger.log('Проверяем наличие записи к врачу в бд');
      const checkDoctorRecord = await this.usersRepository.checkPatientRecord(
        entity,
      );
      if (checkDoctorRecord) {
        this.logger.log('Запись к врачу на это время существует');
        return this.serviceRes.recordAlreadyExist();
      } else {
        this.logger.log('Добавляем запись к врачу в бд');
        const result = await this.usersRepository.addDoctorPatientRecord(
          entity,
        );
        return this.serviceRes.recordSuccessAdded();
      }
    } else {
      this.logger.log('Пользователь или врач не существует');
      return this.serviceRes.userNotFound();
    }
  }

  async getAllPatientRecords(entity: User) {
    console.log(entity);
    this.logger.log(`Получаем записи всех пациентов`);
    const result = await this.usersRepository.getAllPatientRecords(entity);
    if (result) {
      this.logger.log('Данные о записях успешно получены');
      return this.serviceRes.uniqueSuccessRes(result);
    } else {
      this.logger.log('Записи не найдены');
      return this.serviceRes.recordNotFound();
    }
  }

  async getAllDoctorsRecords(entety: User) {
    this.logger.log(`Получем данные записей к врачам`);
    const result = await this.usersRepository.getAllDoctorsRecords(entety);
    if (result) {
      this.logger.log(`Данные о записях успешно получены`);
      return this.serviceRes.uniqueSuccessRes(result);
    } else {
      this.logger.log(`Записи не найдены`);
      return this.serviceRes.recordNotFound();
    }
  }

  async addRecipe(entity: AddRecipeModel) {
    this.logger.log('Получем название клиники из сервиса market');
    const clinics = await this.usersRepository.getClinicsId(
      new GetClinicsByNameModel(entity.clinics_name),
    );

    if (clinics) {
      this.logger.log('Получаем данные лекарства');
      const drug = await this.usersRepository.getDrugId(
        new GetDrugByNameModel(entity.drug_name),
      );

      if (drug) {
        this.logger.log('Данные по лекарству получены');

        const recipeInfo = new RecipeModel(
          entity.patient_email,
          entity.doctor_email,
          clinics.id,
          drug.id,
          entity.expire_at,
          entity.validiry,
          entity.type_recipe,
          entity.mode_duration,
          entity.doze_count,
          entity.doze_per_day,
        );

        this.logger.log('Сохраняем данные по рецепту в базу');
        const result = await this.usersRepository.addDoctorRecipe(recipeInfo);
        return this.serviceRes.recipeSuccessAdded();
      } else {
        this.logger.error('Ошибка сервиса pharm-nest');
        return this.serviceRes.servicePharmError();
      }
    } else {
      this.logger.error('Ошибка сервиса market');
      return this.serviceRes.serviceMarketError();
    }
  }

  async getRecipeByDoctorEmail(entety: User) {
    this.logger.log('Получаем данные по рецептам');
    const result = await this.usersRepository.getReceptByDoctorEmail(entety);
    const data_res = [];
    if (result) {
      this.logger.log('Данные по рецепту получены');
      for (let i = 0; i < result.length; i++) {
        const clinicsInfo = await this.usersRepository.getClinicsNameById(
          new ClinicsModel(result[i].clinics_id),
        );
        const drugInfo = await this.usersRepository.getDrugNameById(
          new DrugsModel(result[i].drug_id),
        );

        if (clinicsInfo && drugInfo) {
          data_res.push({
            drug_name: drugInfo.name,
            clinics_name: clinicsInfo.name,
            status_name: result[i].status_name,
            recype_type: result[i].recype_type,
            mode_application: result[i].mode_application,
            doze_count: result[i].doze_count,
            doze_per_day: result[i].doze_per_day,
            validiry: result[i].validiry,
          });
        } else {
          this.logger.error('Сервис market-nest или pharm-nest недоступен');
          return this.serviceRes.serviceMarketPharmError();
        }
      }
      this.logger.log('Массив данных рецепта обработан');
      return this.serviceRes.uniqueSuccessRes(data_res);
    } else {
      this.logger.warn('Данны по рецептам не получены');
      return this.serviceRes.internalServerError();
    }
  }

  async getRecipeByUserEmail(entety: User) {
    this.logger.log('Получаем данные по рецептам');
    const result = await this.usersRepository.getReceptByUserEmail(entety);
    const data_res = [];
    if (result) {
      this.logger.log('Данные по рецепту получены');
      for (let i = 0; i < result.length; i++) {
        const clinicsInfo = await this.usersRepository.getClinicsNameById(
          new ClinicsModel(result[i].clinics_id),
        );
        const drugInfo = await this.usersRepository.getDrugNameById(
          new DrugsModel(result[i].drug_id),
        );

        if (clinicsInfo && drugInfo) {
          data_res.push({
            drug_name: drugInfo.name,
            clinics_name: clinicsInfo.name,
            status_name: result[i].status_name,
            recype_type: result[i].recype_type,
            mode_application: result[i].mode_application,
            doze_count: result[i].doze_count,
            doze_per_day: result[i].doze_per_day,
            validiry: result[i].validiry,
          });
        } else {
          this.logger.error('Сервис market-nest или pharm-nest недоступен');
          return this.serviceRes.serviceMarketPharmError();
        }
      }
      this.logger.log('Массив данных рецепта обработан');
      return this.serviceRes.uniqueSuccessRes(data_res);
    } else {
      this.logger.warn('Данны по рецептам не получены');
      return this.serviceRes.internalServerError();
    }
  }

  async getDoctorIdByEmail(entity: User) {
    this.logger.log(`Получем данные доктора`);
    const result = await this.usersRepository.getDoctorIdByEmail(entity);
    if (result) {
      this.logger.log(`Данные доктора получены`);
      return this.serviceRes.uniqueSuccessRes(result);
    } else {
      this.logger.log(`Доктор не существует`);
      return this.serviceRes.doctorDoesntExists();
    }
  }

  async getPatientsId(entity: User) {
    this.logger.log(`Проверяем существование доктора`);
    const checkDoctor = await this.usersRepository.getDoctorIdByEmail(entity);
    if (checkDoctor) {
      this.logger.log(`Получаем данные пацентов`);
      const patients = await this.usersRepository.getPatientsId(entity);
      if (patients) {
        this.logger.log(`Данные успешно получены`);
        return this.serviceRes.uniqueSuccessRes(patients);
      } else {
        console.log(patients);
        this.logger.warn('Данные пациентов не получены');
        return this.serviceRes.patientsNotFound();
      }
    } else {
      this.logger.warn(`Доктор не существует`);
      return this.serviceRes.doctorDoesntExists();
    }
  }
  async getUserInfoById(entity: User) {
    this.logger.log(`Получаем данные пользователя`);
    const user = await this.usersRepository.getUserInfoById(entity);
    if (user) {
      this.logger.log(`Информация о пользователе получена`);
      return this.serviceRes.uniqueSuccessRes(user);
    } else {
      this.logger.log(`Пользователь не найден`);
      return this.serviceRes.userNotFound();
    }
  }

  async getUserInfo(entity: UserInfoModel) {
    this.logger.log(`Получаем данные пользователя`);
    console.log(entity);
    const result = await this.usersRepository.getUserIdByFirstLastName(entity);
    if (result) {
      this.logger.log(`Данные получены`);
      return this.serviceRes.uniqueSuccessRes(result);
    } else {
      this.logger.log(`Пользователь не найден`);
      return this.serviceRes.userNotFound();
    }
  }

  async getListDoctorInfo(entity: Array<User>) {
    let doctor_info_arr = [];
    this.logger.log(`Получаем информацию о путях файлов `);
    const formatted = `(${entity.map((v) => v.toString()).join(', ')})`;
    const imagePath = await this.usersRepository.getDoctorImagePath(entity);
    if (imagePath) {
      this.logger.log(`Информация о путях получена`);
      const docData = await this.usersRepository.getDoctorInfoById(formatted);
      if (docData) {
        this.logger.log(`Информация о докторах получена`);
        docData.forEach((cat, index) => {
          const path = imagePath[index];
          console.log('Путь', path);
          doctor_info_arr.push({
            first_name: cat.first_name,
            last_name: cat.last_name,
            email: cat.email,
            image_path: path.file_path,
          });
        });
        return this.serviceRes.uniqueSuccessRes(docData);
      } else {
        this.logger.log(`Информация о докторах не получена`);
        return this.serviceRes.doctorDoesntExists();
      }
    } else {
      this.logger.log(`Информация о путях не получена`);
      return this.serviceRes.serviceStorageError();
    }
  }

  async getListUserInfo(entity: Array<User>) {
    console.log(`Hello`);
    console.log(entity);
    let doctor_info_arr = [];
    this.logger.log(`Получаем информацию о путях файлов `);
    const formatted = `(${entity.map((v) => v.toString()).join(', ')})`;
    console.log(formatted);
    const imagePath = await this.usersRepository.getPatientImagePathById(
      entity,
    );
    if (imagePath) {
      this.logger.log(`Информация о путях получена`);
      const userData = await this.usersRepository.getUsersInfoById(formatted);
      if (userData) {
        this.logger.log(`Информация о пользователе получена`);
        userData.forEach((cat, index) => {
          const path = imagePath[index];
          console.log('Путь', path);
          doctor_info_arr.push({
            first_name: cat.first_name,
            last_name: cat.last_name,
            email: cat.email,
            image_path: path.file_path,
          });
        });
        return this.serviceRes.uniqueSuccessRes(userData);
      } else {
        this.logger.log(`Информация о докторах не получена`);
        return this.serviceRes.doctorDoesntExists();
      }
    } else {
      this.logger.log(`Информация о путях не получена`);
      return this.serviceRes.serviceStorageError();
    }
  }
}
