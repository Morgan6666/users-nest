import { UserMetaUsecase } from 'application/use-cases/UserMetaUsecase';
import { DoctorEducationVM } from 'presentation/view-models/meta/DoctorEducationVM';
import { DoctorMetaVM } from 'presentation/view-models/meta/DoctorMetaVM';
import { DoctorTrainingVM } from 'presentation/view-models/meta/DoctorTrainingVM';
import { UserMetaVM } from 'presentation/view-models/meta/UserMetaVM';
export declare class UserMetaController {
    private readonly userMetaUsecase;
    constructor(userMetaUsecase: UserMetaUsecase);
    addUserMeta(userMeta: UserMetaVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addDoctorInfo(doctorMeta: DoctorMetaVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addDoctorTraining(doctorTraining: DoctorTrainingVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addDocEducation(doctorEducation: DoctorEducationVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
