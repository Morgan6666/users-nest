export declare abstract class IDocumentsRepository<Entity> {
    abstract addUserDocuments(entity: Entity): any;
    abstract checkUserDocument(entity: Entity): any;
    abstract addUserPolisDMS(entity: Entity): any;
    abstract checkPolisExist(entity: Entity): any;
    abstract getUserDocument(entity: Entity): any;
}
