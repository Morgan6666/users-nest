import { Inject, Injectable, Logger } from '@nestjs/common';
import { IUsersMetaReposiotry } from 'application/ports/IUsersMetaRepository';
import { UserExceptions } from 'domain/exceptions/UserExceptions';
import { DoctorEducationModel } from 'domain/models/DoctorEducationModel';
import { DoctorMetaModel } from 'domain/models/DoctorMetaModel';
import { DoctorTrainingModel } from 'domain/models/DoctorTraining';
import { UserMeta } from 'domain/models/UserMeta';
import { ServiceResponse } from 'infrastructure/utils/ServiceResponse';

@Injectable()
export class UserMetaUsecase {
  private readonly logger = new Logger(UserMetaUsecase.name);
  public userException = new UserExceptions();
  public serviceRes = new ServiceResponse();
  constructor(private readonly userMetaRepository: IUsersMetaReposiotry) {}

  async addUserMeta(meta: UserMeta) {
    const result = await this.userMetaRepository.addUserMeta(meta);
    return this.serviceRes.metaSuccessfulyAdded();
  }

  async addDoctorMeta(meta: DoctorMetaModel) {
    if (meta.training_name) {
      this.logger.log(`Добавление данных без тренингов(addDoctorMeta)`);
      const result = await this.userMetaRepository.addDoctorMetaByTraining(
        meta,
      );
      this.logger.log(`Результат добавления данных без тренинга:${result}`);
      return this.serviceRes.documentsAddSuccessfully();
    } else {
      this.logger.log(`Добавление данных с тренингом(addDoctorMeta)`);
      console.log(meta);
      const result = await this.userMetaRepository.addDoctorMetaWithoutTraining(
        meta,
      );
      this.logger.log(
        `Результат добавление данных с учётом тренинга:${result}`,
      );
      return this.serviceRes.documentsAddSuccessfully();
    }
  }
  async addDoctorEducation(meta: DoctorEducationModel) {
    const result = await this.userMetaRepository.addDoctorEducation(meta);
    this.logger.log(`Данные добавления образования доктора:${result}`);
    return this.serviceRes.documentsAddSuccessfully();
  }

  async addDoctorTraining(meta: DoctorTrainingModel) {
    const result = await this.userMetaRepository.addDoctorTraining(meta);
    this.logger.log(`Данные добавления тренингов докотора:${result}`);
    return this.serviceRes.documentsAddSuccessfully();
  }
}
