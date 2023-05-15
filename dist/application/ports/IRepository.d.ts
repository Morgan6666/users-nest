import { Login } from 'domain/models/Login';
import { List } from 'lodash';
export declare abstract class IRepository<Entity> {
    abstract getUser(entity: Entity): Promise<Login>;
    abstract signUser(entity: Entity): any;
    abstract signDoctor(entity: Entity): any;
    abstract getDoctor(entity: Entity): any;
    abstract getUserByEmail(entity: Entity): any;
    abstract getPatientsByEmail(entity: Entity): any;
    abstract getDoctorsByEmail(entity: Entity): any;
    abstract changePasswordDoctor(enitity: Entity): any;
    abstract changePasswordUser(enitity: Entity): any;
    abstract getAllDoctorsInfo(): any;
    abstract getPatientMetaByEmail(entity: Entity): any;
    abstract getDoctorImagePath(entity: List<Entity>): any;
    abstract getUserIdByEmail(entity: Entity): any;
    abstract getPatientImagePathById(entity: List<Entity>): any;
    abstract getPatientInfoByEmail(entity: Entity): any;
    abstract addDoctorPatientRecord(entity: Entity): any;
    abstract checkPatientRecord(entity: Entity): any;
    abstract getAllPatientRecords(entity: Entity): any;
    abstract getAllDoctorsRecords(entity: Entity): any;
    abstract checkDoctorAndPatientExists(entity: Entity): any;
    abstract addDoctorRecipe(entity: Entity): any;
    abstract getDrugId(entity: Entity): any;
    abstract getClinicsId(entity: Entity): any;
    abstract getReceptByDoctorEmail(entity: Entity): any;
    abstract getReceptByUserEmail(entity: Entity): any;
    abstract getClinicsNameById(entity: Entity): any;
    abstract getDrugNameById(entity: Entity): any;
    abstract getDoctorIdByEmail(entity: Entity): any;
    abstract getPatientsId(entity: Entity): any;
    abstract getUserInfoById(entity: Entity): any;
    abstract getUserIdByFirstLastName(entity: Entity): any;
    abstract getDoctorInfoById(entity: string): any;
    abstract getUsersInfoById(entity: string): any;
}
