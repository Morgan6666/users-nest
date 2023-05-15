import { Module } from '@nestjs/common';
import { IUserDocumentsRepository } from 'application/ports/IUserDocumentsRepository';
import { UserDocumentsUsecase } from 'application/use-cases/UserDocumentUseCase';
import { UserDocumentsRepository } from 'infrastructure/database/repositories/UserDocuments';
import { UserDocumentsController } from 'presentation/controllers/UserDocumentsController';

@Module({
  imports: [],
  controllers: [UserDocumentsController],
  providers: [
    UserDocumentsUsecase,
    { provide: IUserDocumentsRepository, useClass: UserDocumentsRepository },
  ],
})
export class UserDocumentsModule {}
