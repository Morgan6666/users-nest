import { Body, Controller, Post } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOperation, ApiResponse, ApiTags, ApiUnprocessableEntityResponse } from "@nestjs/swagger";
import { UserDocumentsUsecase } from "application/use-cases/UserDocumentUseCase";
import { GetUserModel } from "domain/models/GetUserModel";
import { UserDocumentsModels } from "domain/models/UserDocuments";
import { BadRequestError } from "presentation/errors/BadRequestError";
import { UnprocessableEntityError } from "presentation/errors/UnprocessableEntityError";
import { PolisVM } from "presentation/view-models/documents/PolisVM";
import { UserDocumentsVM } from "presentation/view-models/documents/UserDocumentsVM";
import { GetUserVM } from "presentation/view-models/users/GetUserVM";



@ApiTags("Documents")
@Controller("doc")
export class UserDocumentsController {
    constructor(private readonly userDocumentsUsecase: UserDocumentsUsecase){}

    @Post('add')
    @ApiOperation({
        summary: 'Add user meta',
      })
    @ApiResponse({description: "Meta add successfully", type: UserDocumentsVM})
    @ApiBadRequestResponse({
        description: "The request object doesnt th expected one",
        type: BadRequestError,
    })
    @ApiUnprocessableEntityResponse({
        description: "Validation error while login user",
        type: UnprocessableEntityError,
      })
    async addUserDocuments(@Body() userDocuments: UserDocumentsModels) {
        const document = await this.userDocumentsUsecase.addUserDocuments(userDocuments)
        return document
        
    }

    @Post('pol')
    @ApiOperation({
        summary: 'Add polis dms',
      })
    @ApiBadRequestResponse({
        description: "The request object doesnt th expected one",
        type: BadRequestError,
    })
    @ApiUnprocessableEntityResponse({
        description: "Validation error while login user",
        type: UnprocessableEntityError,
      })
    async addPolisDms(@Body() userPolis: PolisVM){
        const dms = await this.userDocumentsUsecase.addUserPolis(PolisVM.fromViewModel(userPolis))
        return dms
    }

    @Post('docs')
    @ApiOperation({
        summary: 'Get docs',
      })
    @ApiBadRequestResponse({
        description: "The request object doesnt th expected one",
        type: BadRequestError,
    })
    @ApiUnprocessableEntityResponse({
        description: "Validation error while login user",
        type: UnprocessableEntityError,
      })

    async getDocs(@Body() user: GetUserVM) {
        const doc = await this.userDocumentsUsecase.getUserDocuments(GetUserVM.fromViewModel(user))
        return doc
    }
    
}