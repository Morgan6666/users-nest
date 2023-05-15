import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { RedisModule } from '@liaoliaots/nestjs-redis';
import { IUsersRepository } from 'application/ports/IUsersRepository';
import { UsersUseCases } from 'application/use-cases/UsersUseCases';
import { UsersRepository } from 'infrastructure/database/repositories/UsersRepository';
import { jwtConstants } from 'infrastructure/utils/secretsConstant';
import { UsersController } from 'presentation/controllers/UsersController';

@Module({
  imports: [
    HttpModule,
    RedisModule.forRoot({
      readyLog: true,
      config: {
        host: 'localhost',
        port: 6379,
      },
    }),
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UsersController],
  providers: [
    UsersUseCases,
    { provide: IUsersRepository, useClass: UsersRepository },
  ],
})
export class UsersModule {}
