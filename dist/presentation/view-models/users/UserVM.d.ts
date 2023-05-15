import { User } from 'domain/models/User';
export declare class UserVM {
    id: number;
    static toViewModel(user: User): UserVM;
}
