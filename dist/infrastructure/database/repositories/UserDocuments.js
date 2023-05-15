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
exports.UserDocumentsRepository = void 0;
const common_1 = require("@nestjs/common");
const BaseRepository_1 = require("./BaseRepository");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const UserDocumentsEntity_1 = require("../mapper/UserDocumentsEntity");
let UserDocumentsRepository = class UserDocumentsRepository extends BaseRepository_1.BaseRepository {
    constructor(connection) {
        super(connection, UserDocumentsEntity_1.UserDocumentsEntity);
        this.connection = connection;
    }
    async addUserDocuments(entity) {
        const result = await this.connection.query(`INSERT INTO user_documents(
            user_id,
            polis_oms,
            snils)
            VALUES((SELECT id FROM users WHERE email = '${entity.email}'),'${entity.polisOms}','${entity.snils}');`);
        return result;
    }
    async checkUserDocument(entity) {
        const result = await this.connection.query(`SELECT id FROM user_documents WHERE user_id=(SELECT id FROM users WHERE email='${entity.email}');`);
        if (result.length == 0) {
            return null;
        }
        return result;
    }
    async addUserPolisDMS(entity) {
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
    async checkPolisExist(entity) {
        const result = await this.connection.query(`SELECT id FROM user_polis_dms WHERE user_id=(SELECT id FROM users WHERE email='${entity.email}');`);
        if (result.length == 0) {
            return null;
        }
        return result;
    }
    async getUserDocument(entity) {
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
};
UserDocumentsRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectConnection)()),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], UserDocumentsRepository);
exports.UserDocumentsRepository = UserDocumentsRepository;
//# sourceMappingURL=UserDocuments.js.map