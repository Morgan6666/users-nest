"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserMedCardsModel = void 0;
class AddUserMedCardsModel {
    constructor(email, survey, laboratory, doctor, conclussion) {
        this.email = email;
        this.survey = survey;
        this.laboratory = laboratory;
        this.doctor = doctor;
        this.conclussion = conclussion;
    }
    equals(entity) {
        if (!(entity instanceof AddUserMedCardsModel))
            return false;
        return this.email === entity.email;
    }
}
exports.AddUserMedCardsModel = AddUserMedCardsModel;
//# sourceMappingURL=AddUserMedcards.js.map