"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMeta = void 0;
class UserMeta {
    constructor(user_id, allergy, allergyReactions, smoke, graft, chronickDisease, operation, injures, eatings_habbits, height, weight, blood_group) {
        this.user_id = user_id;
        this.allergy = allergy;
        this.allergyReactions = allergyReactions;
        this.smoke = smoke;
        this.graft = graft;
        this.chronickDisease = chronickDisease;
        this.operation = operation;
        this.injures = injures;
        this.eatings_habbits = eatings_habbits;
        this.height = height;
        this.weight = weight;
        this.blood_group = blood_group;
    }
    equals(entity) {
        if (!(entity instanceof UserMeta))
            return false;
        return this.user_id === entity.user_id;
    }
}
exports.UserMeta = UserMeta;
//# sourceMappingURL=UserMeta.js.map