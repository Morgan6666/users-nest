import { GetUserModel } from 'domain/models/GetUserModel';
export declare class GetPatientsByEmailVM {
    email: string;
    static fromViewModel(vm: GetPatientsByEmailVM): GetUserModel;
}
