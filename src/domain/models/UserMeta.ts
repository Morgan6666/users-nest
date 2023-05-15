import { DomainException } from 'domain/exceptions/DomainException';
import { IEntity } from 'domain/shared/IEntity';


export class UserMeta implements IEntity {
    user_id?: number
    allergy?: string
    allergyReactions?: string
    smoke?: boolean
    graft?: string
    chronickDisease?: string
    operation?: string
    injures?: string
    eatings_habbits?: string
    height?: number
    weight?: number
    blood_group?: number

    constructor(
        user_id: number,
        allergy: string,
        allergyReactions: string,
        smoke: boolean,
        graft: string,
        chronickDisease: string,
        operation: string,
        injures: string,
        eatings_habbits: string,
        height:  number,
        weight: number,
        blood_group: number
         )
         {
            this.user_id = user_id
           this.allergy = allergy
           this.allergyReactions = allergyReactions
           this.smoke = smoke
           this.graft = graft
           this.chronickDisease = chronickDisease
           this.operation = operation
           this.injures = injures
           this.eatings_habbits = eatings_habbits
           this.height = height
           this.weight = weight
           this.blood_group = blood_group

         }

         equals(entity: IEntity): boolean {
             if(!(entity instanceof UserMeta)) return false;
             return this.user_id === entity.user_id
         }
}