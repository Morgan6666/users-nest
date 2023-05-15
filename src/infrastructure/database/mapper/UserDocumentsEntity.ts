import { EntitySchema } from "typeorm";

import { UserDocumentsModels } from "domain/models/UserDocuments";
import { BaseEntity } from "./BaseEntity";


export const UserDocumentsEntity  = new EntitySchema<UserDocumentsModels> ({
    name: "UserDocuments",
    tableName: "documents",
    target: UserDocumentsModels,
    columns: {
        ...BaseEntity,
        email: {
            type: String,
        },
        polisOms: {
            type: String
        },
        snils: {
            type: String
        }
        
    }
})