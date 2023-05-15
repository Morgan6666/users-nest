"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocumentsEntity = void 0;
const typeorm_1 = require("typeorm");
const UserDocuments_1 = require("../../../domain/models/UserDocuments");
const BaseEntity_1 = require("./BaseEntity");
exports.UserDocumentsEntity = new typeorm_1.EntitySchema({
    name: "UserDocuments",
    tableName: "documents",
    target: UserDocuments_1.UserDocumentsModels,
    columns: Object.assign(Object.assign({}, BaseEntity_1.BaseEntity), { email: {
            type: String,
        }, polisOms: {
            type: String
        }, snils: {
            type: String
        } })
});
//# sourceMappingURL=UserDocumentsEntity.js.map