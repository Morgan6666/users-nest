import { UserMeta } from 'domain/models/UserMeta';
export declare class UserMetaVM {
    user_id: number;
    allergy: string;
    allergyReactions: string;
    smoke: boolean;
    graft: string;
    chronickDisease: string;
    operation: string;
    injures: string;
    eatings_habbit: string;
    height: number;
    weight: number;
    blood_group: number;
    static fromViewModel(vm: UserMetaVM): UserMeta;
}
