import { Injectable, Logger } from '@nestjs/common';
import { IUserDocumentsRepository } from 'application/ports/IUserDocumentsRepository';
import { GetUserModel } from 'domain/models/GetUserModel';
import { PolisDMS } from 'domain/models/PolisDMS';
import { UserDocumentsModels } from 'domain/models/UserDocuments';
import { ServiceResponse } from 'infrastructure/utils/ServiceResponse';

@Injectable()
export class UserDocumentsUsecase {
  private readonly logger = new Logger(UserDocumentsUsecase.name);
  public serviceRes = new ServiceResponse();
  constructor(private readonly userDocumentsRepo: IUserDocumentsRepository) {}

  async addUserDocuments(doc: UserDocumentsModels) {
    const checkDoc = await this.userDocumentsRepo.checkUserDocument(doc);
    this.logger.warn(`Проверка документво пользователя в бд:${checkDoc}`);
    if (!checkDoc) {
      const result = await this.userDocumentsRepo.addUserDocuments(doc);
      this.logger.warn(`Данные добавления документов пользователя:${result}`);
      return this.serviceRes.documentsAddSuccessfully();
    } else {
      return this.serviceRes.documentsAlreadyExists();
    }
  }

  async addUserPolis(pol: PolisDMS) {
    const checkPolis = await this.userDocumentsRepo.checkPolisExist(pol);
    this.logger.warn(`Проверка полиса пользователя в бд:${checkPolis}`);
    if (!checkPolis) {
      const result = await this.userDocumentsRepo.addUserPolisDMS(pol);
      this.logger.warn(`Результат добавления полиса в бд:${result}`);
      return this.serviceRes.polisSuccessAdded();
    } else {
      return this.serviceRes.polisAlreadyExists();
    }
  }

  async getUserDocuments(user: GetUserModel) {
    const result = await this.userDocumentsRepo.getUserDocument(user);
    this.logger.warn(`Данные пользователя:${result}`);
    if (!result) {
      this.logger.warn(`Даннные не найдены:${result}`);
      return this.serviceRes.documnetsNotFound();
    } else {
      return this.serviceRes.uniqueSuccessRes(result);
    }
  }
}
