// import {
//   CanActivate,
//   ExecutionContext,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { Request } from 'express';
// import { request } from 'http';
// import { jwtConstants } from 'infrastructure/utils/secretsConstant';
// var Fingerprint = require('express-fingerprint')

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(private jwtService: JwtService) {}

//   canActivate(
//     context: ExecutionContext,
//   ){
//     const request = context.switchToHttp().getRequest();
//     return validateRequest(request);
//   }
// }
