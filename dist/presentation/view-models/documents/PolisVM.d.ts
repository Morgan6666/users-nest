import { PolisDMS } from 'domain/models/PolisDMS';
export declare class PolisVM {
    email: string;
    insurence_company: string;
    insurence_surename: string;
    polis_number: string;
    static fromViewModel(vm: PolisVM): PolisDMS;
}
