import { User } from 'domain/models/User';
export declare class CreateUserVM {
    firstName: string;
    email: string;
    lastName: string;
    password: string;
    category?: string;
    profession?: string;
    static fromViewModel(vm: CreateUserVM): User;
}
