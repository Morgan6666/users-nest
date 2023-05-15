"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDocumentsModule = void 0;
const common_1 = require("@nestjs/common");
const IUserDocumentsRepository_1 = require("../../application/ports/IUserDocumentsRepository");
const UserDocumentUseCase_1 = require("../../application/use-cases/UserDocumentUseCase");
const UserDocuments_1 = require("../database/repositories/UserDocuments");
const UserDocumentsController_1 = require("../../presentation/controllers/UserDocumentsController");
let UserDocumentsModule = class UserDocumentsModule {
};
UserDocumentsModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [UserDocumentsController_1.UserDocumentsController],
        providers: [
            UserDocumentUseCase_1.UserDocumentsUsecase,
            { provide: IUserDocumentsRepository_1.IUserDocumentsRepository, useClass: UserDocuments_1.UserDocumentsRepository },
        ],
    })
], UserDocumentsModule);
exports.UserDocumentsModule = UserDocumentsModule;
//# sourceMappingURL=userDocument.module.js.map