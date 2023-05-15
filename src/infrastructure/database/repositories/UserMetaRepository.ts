import { Injectable } from '@nestjs/common';
import { BaseRepository } from './BaseRepository';
import { UserMeta } from 'domain/models/UserMeta';
import { Connection } from 'typeorm';
import { InjectConnection } from '@nestjs/typeorm';
import { UserMetaEntity } from '../mapper/UserMetaEntity';
import { IUsersMetaReposiotry } from 'application/ports/IUsersMetaRepository';
import { AddUserMedCardsModel } from 'domain/models/AddUserMedcards';
import { DoctorMetaModel } from 'domain/models/DoctorMetaModel';
import { DoctorTrainingModel } from 'domain/models/DoctorTraining';
import { DoctorEducationModel } from 'domain/models/DoctorEducationModel';
import { runInThisContext } from 'vm';

@Injectable()
export class UserMetaRepository
  extends BaseRepository<UserMeta>
  implements IUsersMetaReposiotry
{
  connection: Connection;
  constructor(@InjectConnection() connection: Connection) {
    super(connection, UserMetaEntity);
    this.connection = connection;
  }
  async addUserMeta(entity: UserMeta) {
    const result = await this.connection.query(
      `INSERT INTO users_meta(
            user_id,
            allergy,
            allergy_reactions,
            smoke,
            graft_id,
            chronick_disease,
            operation,
            injures,
            eating_habbits,
            height,
            weight,
            blood_group) 
          VALUES(
            '${entity.user_id}',
            '${entity.allergy}',
            '${entity.allergyReactions}',
            '${entity.smoke}',
            (SELECT id FROM disease WHERE name='${entity.graft}'),
            '${entity.chronickDisease}',
            '${entity.operation}',
            '${entity.injures}',
            '${entity.eatings_habbits}',
            '${entity.height}',
            '${entity.weight}',
            '${entity.blood_group}');`,
    );

    return result;
  }

  async addDoctorMetaByTraining(entity: DoctorMetaModel) {
    console.log(entity);
    const result = await this.connection.query(`INSERT INTO
      doctor_meta(experience, user_id, experience_category_id, place_of_work, university_id, training_id, specialisation_id)
  VALUES(
    ${entity.experience},
    (SELECT id FROM doctors WHERE email = '${entity.email}'),
    (SELECT id FROM experience_category WHERE name = '${entity.category}'),
    '${entity.place_of_work}',
    (SELECT id FROM university WHERE name = '${entity.university}'),
    (SELECT id FROM training WHERE training_name='${entity.training_name}'),
    (SELECT id FROM specialisation WHERE name = '${entity.specialisation}'));`);

    return result;
  }

  async addDoctorMetaWithoutTraining(entity: DoctorMetaModel) {
    console.log(entity);
    const result = await this.connection.query(`INSERT INTO
      doctor_meta(experience, user_id, experience_category_id, place_of_work, university_id, training_id, specialisation_id)
  VALUES(
    ${entity.experience},
    (SELECT id FROM doctors WHERE email = '${entity.email}'),
    (SELECT id FROM experience_category WHERE name = '${entity.category}'),
    '${entity.place_of_work}',
    (SELECT id FROM university WHERE name = '${entity.university}'),
    0,
    (SELECT id FROM specialisation WHERE name = '${entity.specialisation}'));`);
    return result;
  }

  async addDoctorTraining(entity: DoctorTrainingModel) {
    const result = await this.connection.query(`
      INSERT INTO training(
        training_name,
        university_id,
        year,
        doctor_id)
      VALUES(
  '${entity.training_name}',
   (SELECT id FROM university WHERE name = '${entity.university}'),
   '${entity.year}',
   (SELECT id FROM doctors WHERE email='${entity.email}'));`);
    return result;
  }

  async addDoctorEducation(entity: DoctorEducationModel) {
    const result = await this.connection.query(`
      INSERT INTO doctor_education(
        doctor_id,
        university_id,
        year,
        department)
      VALUES(
        (SELECT id FROM doctors WHERE email = '${entity.email}'),
        (SELECT id FROM university WHERE name = '${entity.university}'),
        '${entity.year}',
        '${entity.department}');`);
    return result;
  }

  async checkDoctorMeta(entity: DoctorMetaModel) {
    const result = await this.connection.query(
      `SELECT id FROM doctor_meta WHERE user_id = (SELECT id FROM doctors WHERE email = '${entity.email}');`,
    );
    if (result.length == 0) {
      return null;
    }
    return result[0];
  }
}
