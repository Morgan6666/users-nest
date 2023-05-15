import { UserDocumentsModels } from 'domain/models/UserDocuments';
export declare class UserDocumentsVM {
    email: string;
    polisOms: string;
    snils: string;
    static fromViewModel(vm: UserDocumentsVM): UserDocumentsModels;
}
