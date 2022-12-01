"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
function deleteCharacter(req, res) {
    const { id } = req.params;
    const index = data_1.characters.findIndex(character => character.id === Number(id));
    if (index > -1)
        data_1.characters.splice(index, 1);
    res.status(200).end();
}
exports.default = deleteCharacter;
//# sourceMappingURL=deleteCharacter.js.map