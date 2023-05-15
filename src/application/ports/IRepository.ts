import { Injectable } from '@nestjs/common';
import { Login } from 'domain/models/Login';
import { List } from 'lodash';

@Injectable()
export abstract class IRepository<Entity> {
  abstract getUser(entity: Entity): Promise<Login>;
  abstract signUser(entity: Entity);
  abstract signDoctor(entity: Entity);
  abstract getDoctor(entity: Entity);
  abstract getUserByEmail(entity: Entity);
  abstract getPatientsByEmail(entity: Entity);
  abstract getDoctorsByEmail(entity: Entity);
  abstract changePasswordDoctor(enitity: Entity);
  abstract changePasswordUser(enitity: Entity);
  abstract getAllDoctorsInfo();
  abstract getPatientMetaByEmail(entity: Entity);
  abstract getDoctorImagePath(entity: List<Entity>);
  abstract getUserIdByEmail(entity: Entity);
  abstract getPatientImagePathById(entity: List<Entity>);
  abstract getPatientInfoByEmail(entity: Entity);
  abstract addDoctorPatientRecord(entity: Entity);
  abstract checkPatientRecord(entity: Entity);
  abstract getAllPatientRecords(entity: Entity);
  abstract getAllDoctorsRecords(entity: Entity);
  abstract checkDoctorAndPatientExists(entity: Entity);
  abstract addDoctorRecipe(entity: Entity);
  abstract getDrugId(entity: Entity);
  abstract getClinicsId(entity: Entity);
  abstract getReceptByDoctorEmail(entity: Entity);
  abstract getReceptByUserEmail(entity: Entity);
  abstract getClinicsNameById(entity: Entity);
  abstract getDrugNameById(entity: Entity);
  abstract getDoctorIdByEmail(entity: Entity);
  abstract getPatientsId(entity: Entity);
  abstract getUserInfoById(entity: Entity);
  abstract getUserIdByFirstLastName(entity: Entity);
  abstract getDoctorInfoById(entity: string);
  abstract getUsersInfoById(entity: string);
}
