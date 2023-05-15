import { ChangePasswordModel } from 'domain/models/ChangePasswordModel';
export declare class ChangePasswordVM {
    email: string;
    password: string;
    newPassword: any;
    category?: string;
    static fromViewModel(vm: ChangePasswordVM): ChangePasswordModel;
}
