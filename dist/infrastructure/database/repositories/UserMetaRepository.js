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
exports.UserMetaRepository = void 0;
const common_1 = require("@nestjs/common");
const BaseRepository_1 = require("./BaseRepository");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const UserMetaEntity_1 = require("../mapper/UserMetaEntity");
let UserMetaRepository = class UserMetaRepository extends BaseRepository_1.BaseRepository {
    constructor(connection) {
        super(connection, UserMetaEntity_1.UserMetaEntity);
        this.connection = connection;
    }
    async addUserMeta(entity) {
        const result = await this.connection.query(`INSERT INTO users_meta(
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
            '${entity.blood_group}');`);
        return result;
    }
    async addDoctorMetaByTraining(entity) {
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
    async addDoctorMetaWithoutTraining(entity) {
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
    async addDoctorTraining(entity) {
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
    async addDoctorEducation(entity) {
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
    async checkDoctorMeta(entity) {
        const result = await this.connection.query(`SELECT id FROM doctor_meta WHERE user_id = (SELECT id FROM doctors WHERE email = '${entity.email}');`);
        if (result.length == 0) {
            return null;
        }
        return result[0];
    }
};
UserMetaRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], UserMetaRepository);
exports.UserMetaRepository = UserMetaRepository;
//# sourceMappingURL=UserMetaRepository.js.map