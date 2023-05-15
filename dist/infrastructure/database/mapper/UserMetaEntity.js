"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMetaEntity = void 0;
const typeorm_1 = require("typeorm");
const UserMeta_1 = require("../../../domain/models/UserMeta");
const BaseEntity_1 = require("./BaseEntity");
exports.UserMetaEntity = new typeorm_1.EntitySchema({
    name: "UserMeta",
    tableName: "users_meta",
    target: UserMeta_1.UserMeta,
    columns: Object.assign(Object.assign({}, BaseEntity_1.BaseEntity), { user_id: {
            type: Number,
        }, allergy: {
            type: String,
        }, allergyReactions: {
            type: String,
        }, smoke: {
            type: Boolean,
        }, graft: {
            type: String
        }, chronickDisease: {
            type: String,
        }, operation: {
            type: String,
        }, injures: {
            type: String
        } })
});
//# sourceMappingURL=UserMetaEntity.js.map