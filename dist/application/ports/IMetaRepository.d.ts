export declare abstract class IMetaRepository<Entity> {
    abstract addUserMeta(entity: Entity): any;
    abstract addDoctorMetaByTraining(entity: Entity): any;
    abstract addDoctorMetaWithoutTraining(entity: Entity): any;
    abstract addDoctorTraining(entity: Entity): any;
    abstract addDoctorEducation(entity: Entity): any;
    abstract checkDoctorMeta(entity: Entity): any;
}
