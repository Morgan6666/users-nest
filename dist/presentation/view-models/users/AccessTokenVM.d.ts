import { SignRes } from 'domain/models/SignRes';
export declare class SignVM {
    id: number;
    static toViewModel(sign: SignRes): SignVM;
}
