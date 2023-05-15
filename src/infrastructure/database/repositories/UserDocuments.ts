import { Injectable } from '@nestjs/common';
import { BaseRepository } from './BaseRepository';
import { UserDocumentsModels } from 'domain/models/UserDocuments';
import { IDocumentsRepository } from 'application/ports/IDocumentsRepository';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
import { UserDocumentsEntity } from '../mapper/UserDocumentsEntity';
import { IUserDocumentsRepository } from 'application/ports/IUserDocumentsRepository';
import { PolisDMS } from 'domain/models/PolisDMS';
import { User } from 'domain/models/User';
import { GetUserModel } from 'domain/models/GetUserModel';

@Injectable()
export class UserDocumentsRepository extends BaseRepository<UserDocumentsModels>
  implements IUserDocumentsRepository {
  connection: Connection;
  constructor(@InjectConnection() connection: Connection) {
    super(connection, UserDocumentsEntity);
    this.connection = connection;
  }

  async addUserDocuments(entity: UserDocumentsModels) {
    const result = await this.connection.query(`INSERT INTO user_documents(
            user_id,
            polis_oms,
            snils)
            VALUES((SELECT id FROM users WHERE email = '${entity.email}'),'${entity.polisOms}','${entity.snils}');`);
    return result;
  }

  async checkUserDocument(entity: UserDocumentsModels) {
    const result = await this.connection.query(
      `SELECT id FROM user_documents WHERE user_id=(SELECT id FROM users WHERE email='${entity.email}');`,
    );
    if (result.length == 0) {
      return null;
    }
    return result;
  }
  async addUserPolisDMS(entity: PolisDMS) {
    const result = await this.connection.query(`INSERT INTO user_polis_dms(
        insurance_company_id,
         user_id,
          polis_number,
           insurance_surename)
             VALUES(
                (SELECT id FROM insurence_company WHERE name='${entity.insurance_company}'),
                 (SELECT id FROM users WHERE email = '${entity.email}'),
                  '${entity.polis_number}',
                   '${entity.insurance_surename}');`);
    return result;
  }

  async checkPolisExist(entity: PolisDMS) {
    const result = await this.connection.query(
      `SELECT id FROM user_polis_dms WHERE user_id=(SELECT id FROM users WHERE email='${entity.email}');`,
    );
    if (result.length == 0) {
      return null;
    }
    return result;
  }

  async getUserDocument(entity: GetUserModel) {
    const result = await this.connection.query(`SELECT
        uu.polis_oms,
        uu.snils,
        dd.polis_number as polis_dms,
        dd.insurance_company,
        dd.insurance_surename
    FROM
        (SELECT polis_oms, snils FROM user_documents WHERE user_id=(SELECT id FROM users WHERE email='${entity.email}')) as uu,
        (SELECT polis_number, name as insurance_company,insurance_surename FROM user_polis_dms INNER JOIN insurence_company ON insurance_company_id=insurence_company.id WHERE user_id = (SELECT id FROM users WHERE email='${entity.email}')) as dd;`);
    if (result.length == 0) {
      return null;
    }
    return result;
  }
}
