import { EntitySchema } from "typeorm";

import { UserMeta } from "domain/models/UserMeta";
import { BaseEntity } from "./BaseEntity";


export const  UserMetaEntity = new EntitySchema<UserMeta> ({
    name: "UserMeta",
    tableName: "users_meta",
    target: UserMeta,
    columns: {
        ...BaseEntity,
        user_id: {
            type: Number,
            
        },
        allergy: {
            type: String,
            
        },
        allergyReactions: {
            type: String,
        },
        smoke: {
            type: Boolean,
        },
        graft: {
            type: String
        },
        chronickDisease: {
            type: String,
        },
        operation: {
            type: String,
        },
        injures: {
            type: String
        },
    }
})

