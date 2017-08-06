"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const route = express_1.Router();
exports.route = route;
let students = [
    { name: 'Rishabh' },
    { name: 'Bhavya' }
];
route.get('/', (req, res) => {
    res.send(students);
});
//# sourceMappingURL=students.js.map