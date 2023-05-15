import { Injectable } from '@nestjs/common';
import { UserDocumentsModels } from 'domain/models/UserDocuments';
import { IRepository } from './IRepository';
import { IDocumentsRepository } from './IDocumentsRepository';

@Injectable()
export abstract class IUserDocumentsRepository extends IDocumentsRepository<
  UserDocumentsModels
> {}
