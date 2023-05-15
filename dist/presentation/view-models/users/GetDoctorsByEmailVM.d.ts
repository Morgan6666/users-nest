import { GetUserModel } from 'domain/models/GetUserModel';
export declare class GetDoctorsByEmailVM {
    email: string;
    static fromViewModel(vm: GetDoctorsByEmailVM): GetUserModel;
}
