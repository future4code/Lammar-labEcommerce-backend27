"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCharacter(req, res) {
    const { name, gender, description } = req.body;
    console.log(req.headers["content-type"]);
    res.status(201).end();
}
exports.default = createCharacter;
//# sourceMappingURL=createCharacter.js.map