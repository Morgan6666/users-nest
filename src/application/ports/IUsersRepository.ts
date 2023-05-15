import { Injectable } from '@nestjs/common';

import { User } from 'domain/models/User';

import { IRepository } from './IRepository';
import { Login } from 'domain/models/Login';

@Injectable()
export abstract class IUsersRepository extends IRepository<User> {}
