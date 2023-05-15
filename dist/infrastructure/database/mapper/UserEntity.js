"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("../../../domain/models/User");
const BaseEntity_1 = require("./BaseEntity");
exports.UserEntity = new typeorm_1.EntitySchema({
    name: 'User',
    tableName: 'users',
    target: User_1.User,
    columns: Object.assign(Object.assign({}, BaseEntity_1.BaseEntity), { firstName: {
            type: String,
            length: 100,
        }, email: {
            type: String,
            length: 100,
        }, lastName: {
            type: String,
            length: 100,
        }, password: {
            type: String,
            length: 100
        } }),
    orderBy: {
        createdAt: 'ASC',
    },
    relations: {},
    indices: [
        {
            name: 'IDX_USERS',
            unique: true,
            columns: ['firtsName', 'email'],
        },
    ],
    uniques: [
        {
            name: 'UNIQUE_USERS',
            columns: ['email'],
        },
    ],
});
//# sourceMappingURL=UserEntity.js.map