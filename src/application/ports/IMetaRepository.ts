import { Injectable } from '@nestjs/common';

@Injectable()
export abstract class IMetaRepository<Entity> {
  abstract addUserMeta(entity: Entity);
  abstract addDoctorMetaByTraining(entity: Entity);
  abstract addDoctorMetaWithoutTraining(entity: Entity);
  abstract addDoctorTraining(entity: Entity);
  abstract addDoctorEducation(entity: Entity);
  abstract checkDoctorMeta(entity: Entity);
}
