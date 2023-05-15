"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const UserEntity_1 = require("../mapper/UserEntity");
const BaseRepository_1 = require("./BaseRepository");
const axios_1 = require("@nestjs/axios");
let UsersRepository = class UsersRepository extends BaseRepository_1.BaseRepository {
    constructor(connection, httpService) {
        super(connection, UserEntity_1.UserEntity);
        this.httpService = httpService;
        this.connection = connection;
    }
    async getUser(entity) {
        const result = await this.connection.query(`SELECT id,email,password FROM users WHERE email='${entity.email}';`);
        if (result.length == 0) {
            return null;
        }
        return result[0];
    }
    async signUser(entity) {
        const result = await this.connection.query(`INSERT INTO users(
      first_name,
      last_name,
      email,
      password)

    VALUES('${entity.firstName}','${entity.lastName}', '${entity.email}', '${entity.password}') RETURNING id,email;`);
        const data = result[0];
        return data;
    }
    async signDoctor(entity) {
        console.log(entity);
        console.log(`INSERT INTO doctors(
      first_name,
      last_name,
      email,
      password,
      category_id)
      VALUES('${entity.firstName}', '${entity.lastName}','${entity.email}','${entity.password}',(SELECT id FROM category WHERE name='${entity.profession}')) RETURNING id,email;`);
        const result = await this.connection.query(`INSERT INTO doctors(
      first_name,
      last_name,
      email,
      password,
      category_id)
      VALUES('${entity.firstName}', '${entity.lastName}','${entity.email}','${entity.password}',(SELECT id FROM category WHERE name='${entity.profession}')) RETURNING id,email;`);
        console.log(result);
        const data = result[0];
        return data;
    }
    async getDoctor(entity) {
        const result = await this.connection.query(`SELECT id,email,password FROM doctors WHERE email='${entity.email}'`);
        console.log(result);
        if (result.length == 0) {
            return null;
        }
        return result[0];
    }
    async getUserByEmail(entity) {
        const result = await this.connection.query(`SELECT first_name,last_name,email FROM users WHERE email='${entity.email}';`);
        if (result.length == 0) {
            return null;
        }
        return result[0];
    }
    async getPatientsByEmail(entity) {
        console.log(entity);
        const result = await this.connection
            .query(`SELECT dd.id as user_id,dd.first_name, dd.last_name, dd.email FROM patients
    JOIN users as dd ON patients_id=id  WHERE doctor_id = (SELECT id FROM doctors WHERE email = '${entity.email}');`);
        if (result.length == 0) {
            return null;
        }
        return result;
    }
    async getDoctorsByEmail(entity) {
        const result = await this.connection
            .query(`SELECT dd.first_name, dd.last_name, dd.email FROM patients
    JOIN doctors as dd ON doctor_id=id  WHERE patients_id = (SELECT id FROM users WHERE email = '${entity.email}');`);
        if (result.length == 0) {
            return null;
        }
        return result;
    }
    async changePasswordUser(entity) {
        const result = await this.connection.query(`UPDATE users SET password='${entity.newPassword}' WHERE email='${entity.email}'`);
        return result;
    }
    async changePasswordDoctor(entity) {
        const result = await this.connection.query(`UPDATE doctors SET password='${entity.password}' WHERE email='${entity.email};'`);
        return result;
    }
    async getAllDoctorsInfo() {
        const result = await this.connection.query(`SELECT
       DISTINCT
      d.id as user_id,
      d.first_name,
      d.last_name,
      d.email,
      m.experience,
      m.place_of_work,
      c.name as category_name,
      u.name as university_name,
      t.training_name,
      t.year

   FROM doctor_meta as m
   INNER JOIN doctors as d ON m.user_id= d.id
   INNER JOIN category as c ON category_id=c.id
   INNER JOIN doctor_education as e  on d.id = e.doctor_id
   INNER JOIN university as u on  e.university_id = u.id
   INNER JOIN training as t on training_id  = t.id;`);
        console.log(result);
        if (result.length == 0) {
            return null;
        }
        return result;
    }
    async getDoctorImagePath(entity) {
        console.log(entity);
        const { data } = await this.httpService.axiosRef.post('http://localhost:3004/patient/doctor', entity);
        if (data.Success != false) {
            return data.Content;
        }
        else {
            return null;
        }
    }
    async getPatientImagePathById(entity) {
        console.log(entity);
        const { data } = await this.httpService.axiosRef.post('http://localhost:3004/patient/users_path', entity);
        if (data.Success != false) {
            return data.Content;
        }
        else {
            return null;
        }
    }
    async getPatientMetaByEmail(entity) {
        const result = await this.connection.query(`SELECT
    allergy,
    allergy_reactions,
    smoke,
    d.name as graft_name,
    chronick_disease,
    operation,
    injures,
    eating_habbits,
    height,
    weight,
    blood_group
FROM users_meta INNER JOIN disease d on d.id = users_meta.graft_id
WHERE user_id = (SELECT id FROM users WHERE email='${entity.email}');`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getUserIdByEmail(entity) {
        const result = await this.connection.query(`SELECT id FROM users WHERE email='${entity.email}';`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getPatientInfoByEmail(entity) {
        const result = await this.connection.query(`
    SELECT allergy,
      allergy_reactions,
    smoke,
    d.name as graft_name,
    operation,
    injures,
    eating_habbits,
    height,
    weight,
    blood_group
FROM users_meta
INNER JOIN  users u on users_meta.user_id = u.id
INNER JOIN disease d on d.id = users_meta.graft_id

WHERE u.email = '${entity.email}';`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async addDoctorPatientRecord(entity) {
        const result = await this.connection.query(`INSERT INTO records(doctor_id, patient_id, time_receipt)
      VALUES ((SELECT id FROM doctors WHERE email = '${entity.doctor_email}'), (SELECT  id FROM users WHERE email = '${entity.patient_email}'), '${entity.time_receipt}');`);
        return result;
    }
    async checkPatientRecord(entity) {
        const result = await this.connection.query(`SELECT patient_id,
      doctor_id
FROM records
WHERE patient_id = (SELECT DISTINCT id FROM users WHERE email = '${entity.patient_email}') AND doctor_id = (SELECT DISTINCT id FROM doctors WHERE email = '${entity.doctor_email}') AND time_receipt = '${entity.time_receipt}';`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getAllPatientRecords(entity) {
        const result = await this.connection.query(`SELECT u.first_name,
      u.last_name,
      u.email,
      TO_CHAR(r.time_receipt, 'DD:MM:YYYY HH24:MI:SS') as time_receipt

FROM records as r
INNER JOIN users u on u.id = r.patient_id
INNER JOIN doctors d on d.id = r.doctor_id
WHERE u.email = '${entity.email}';`);
        console.log(result);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getAllDoctorsRecords(entity) {
        const result = await this.connection.query(`SELECT d.first_name,
      d.last_name,
      d.email,
      TO_CHAR(r.time_receipt, 'DD:MM:YYYY HH24:MI:SS') as time_receipt

FROM records as r
INNER JOIN users u on u.id = r.patient_id
INNER JOIN doctors d on d.id = r.doctor_id
WHERE d.email = '${entity.email}';`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async checkDoctorAndPatientExists(entity) {
        const result = await this.connection.query(`SELECT d.id as doc_id, u.id as user_id FROM doctors d,users u WHERE d.email = '${entity.doctor_email}' AND u.email =  '${entity.patient_email}';`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async addDoctorRecipe(entity) {
        const result = await this.connection
            .query(`INSERT INTO recipe(doctor_id, patient_id, drug_id, expire_at, status_recipe_id, recipe_type_id, clinics_id, mode_application_id, doze_count, doze_per_day, validiry)
    VALUES
        ((SELECT id FROM doctors WHERE email = '${entity.doctor_email}'),
         (SELECT id FROM users WHERE email = '${entity.patient_email}'),
         ${entity.drug_id},
         '${entity.expire_at}',
         1,
         (SELECT id FROM recipe_type WHERE name='${entity.type_recipe}'),
         ${entity.clinics_id},
         (SELECT id FROM recipe_mode WHERE name = '${entity.mode_duration}'),
         ${entity.doze_count},
         ${entity.doze_per_day},
         '${entity.validiry}');
   `);
        return result;
    }
    async getDrugId(entity) {
        const { data } = await this.httpService.axiosRef.post('http://localhost:3011/pharmocology/get_drug_id', entity);
        if (data.Success != false) {
            return data.Content;
        }
        else {
            return null;
        }
    }
    async getClinicsId(entity) {
        const { data } = await this.httpService.axiosRef.post('http://localhost:3006/products/get_clinics_id', entity);
        if (data.Success != false) {
            return data.Content;
        }
        else {
            return null;
        }
    }
    async getClinicsNameById(entity) {
        const { data } = await this.httpService.axiosRef.post('http://localhost:3006/products/get_clinics_name', entity);
        if (data.Success != false) {
            return data.Content;
        }
        else {
            return null;
        }
    }
    async getDrugNameById(entity) {
        const { data } = await this.httpService.axiosRef.post('http://localhost:3011/pharmocology/get_drug_name', entity);
        if (data.Success != false) {
            return data.Content;
        }
        else {
            return null;
        }
    }
    async getReceptByDoctorEmail(entity) {
        const result = await this.connection.query(`SELECT d.drug_id,
    d.expire_at,
    rs.name as status_name,
    rt.name as recype_type,
    d.clinics_id,
    rm.name as mode_application,
    d.doze_count,
    d.doze_per_day,
    d.validiry
FROM recipe as d
INNER JOIN recipe_mode rm on rm.id = d.mode_application_id
INNER JOIN recipe_status rs on d.status_recipe_id = rs.id
INNER JOIN recipe_type rt on d.recipe_type_id = rt.id
WHERE doctor_id = (SELECT DISTINCT patients.doctor_id FROM patients INNER JOIN doctors d2 on d2.id = patients.doctor_id WHERE d2.email = '${entity.email}');`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getReceptByUserEmail(entity) {
        const result = await this.connection.query(`SELECT d.drug_id,
    d.expire_at,
    rs.name as status_name,
    rt.name as recype_type,
    d.clinics_id,
    rm.name as mode_application,
    d.doze_count,
    d.doze_per_day,
    d.validiry
FROM recipe as d
INNER JOIN recipe_mode rm on rm.id = d.mode_application_id
INNER JOIN recipe_status rs on d.status_recipe_id = rs.id
INNER JOIN recipe_type rt on d.recipe_type_id = rt.id
WHERE patient_id = (SELECT DISTINCT patients.patients_id FROM patients INNER JOIN users d2 on d2.id = patients.patients_id WHERE d2.email = '${entity.email}');`);
        if (result.length == 0) {
            return null;
        }
        else {
            return result;
        }
    }
    async getDoctorIdByEmail(entity) {
        const result = await this.connection.query(`SELECT id FROM doctors WHERE email='${entity.email}';`);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
    async getPatientsId(entity) {
        const result = await this.connection.query(`SELECT patients_id as id FROM patients WHERE doctor_id = (SELECT id FROM doctors WHERE email='${entity.email}') AND patients_id=(SELECT id FROM users WHERE email='${entity.patient_email}');`);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
    async getUserInfoById(entity) {
        const result = await this.connection.query(`SELECT first_name,
      last_name,
      email
FROM users WHERE id = ${entity.user_id};`);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
    async getUserIdByFirstLastName(entity) {
        const result = await this.connection.query(`SELECT id FROM users WHERE first_name = '${entity.first_name}' and last_name = '${entity.last_name}';`);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
    async getDoctorInfoById(entity) {
        const result = await this.connection.query(`SELECT first_name,last_name,email
      FROM doctors WHERE id IN ${entity};`);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
    async getUsersInfoById(entity) {
        console.log(`SELECT first_name,last_name,email
    FROM users WHERE id IN ${entity};`);
        const result = await this.connection.query(`SELECT first_name,last_name,email
      FROM users WHERE id IN ${entity};`);
        if (result.length == 0) {
            return null;
        }
        else {
            const data = result[0];
            return data;
        }
    }
};
UsersRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_2.Connection,
        axios_1.HttpService])
], UsersRepository);
exports.UsersRepository = UsersRepository;
//# sourceMappingURL=UsersRepository.js.map