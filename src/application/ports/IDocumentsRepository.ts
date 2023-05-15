import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IDocumentsRepository<Entity> {
  abstract addUserDocuments(entity: Entity);
  abstract checkUserDocument(entity: Entity);
  abstract addUserPolisDMS(entity: Entity);
  abstract checkPolisExist(entity: Entity);
  abstract getUserDocument(entity: Entity);
}
