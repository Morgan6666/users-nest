import { UserDocumentsUsecase } from "application/use-cases/UserDocumentUseCase";
import { UserDocumentsModels } from "domain/models/UserDocuments";
import { PolisVM } from "presentation/view-models/documents/PolisVM";
import { GetUserVM } from "presentation/view-models/users/GetUserVM";
export declare class UserDocumentsController {
    private readonly userDocumentsUsecase;
    constructor(userDocumentsUsecase: UserDocumentsUsecase);
    addUserDocuments(userDocuments: UserDocumentsModels): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    addPolisDms(userPolis: PolisVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
    getDocs(user: GetUserVM): Promise<{
        Success: boolean;
        Message: string;
        Code: number;
    }>;
}
