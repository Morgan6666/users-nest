"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const axios_1 = require("@nestjs/axios");
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const nestjs_redis_1 = require("@liaoliaots/nestjs-redis");
const IUsersRepository_1 = require("../../application/ports/IUsersRepository");
const UsersUseCases_1 = require("../../application/use-cases/UsersUseCases");
const UsersRepository_1 = require("../database/repositories/UsersRepository");
const secretsConstant_1 = require("../utils/secretsConstant");
const UsersController_1 = require("../../presentation/controllers/UsersController");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            axios_1.HttpModule,
            nestjs_redis_1.RedisModule.forRoot({
                readyLog: true,
                config: {
                    host: 'localhost',
                    port: 6379,
                },
            }),
            jwt_1.JwtModule.register({
                global: true,
                secret: secretsConstant_1.jwtConstants.secret,
                signOptions: { expiresIn: '60s' },
            }),
        ],
        controllers: [UsersController_1.UsersController],
        providers: [
            UsersUseCases_1.UsersUseCases,
            { provide: IUsersRepository_1.IUsersRepository, useClass: UsersRepository_1.UsersRepository },
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map