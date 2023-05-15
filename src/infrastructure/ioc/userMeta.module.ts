import { Module } from '@nestjs/common';
import { IUsersMetaReposiotry } from 'application/ports/IUsersMetaRepository';
import { UserMetaUsecase } from 'application/use-cases/UserMetaUsecase';
import { UserMetaRepository } from 'infrastructure/database/repositories/UserMetaRepository';
import { UserMetaController } from 'presentation/controllers/UserMetaController';

@Module({
  imports: [],
  controllers: [UserMetaController],
  providers: [
    UserMetaUsecase,
    { provide: IUsersMetaReposiotry, useClass: UserMetaRepository },
  ],
})
export class UserMetaModule {}
