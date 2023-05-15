import { Injectable } from '@nestjs/common';
import { extend } from 'lodash';
import { IRepository } from './IRepository';
import { UserMeta } from 'domain/models/UserMeta';
import { IMetaRepository } from './IMetaRepository';

@Injectable()
export abstract class IUsersMetaReposiotry extends IMetaRepository<UserMeta> {}
