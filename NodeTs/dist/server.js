"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const teachers_1 = require("./routes/teachers");
const students_1 = require("./routes/students");
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World !');
});
app.use('/students', students_1.route);
app.use('/teachers', teachers_1.route);
app.listen(2345, () => {
    console.log('Server started on http://localhost:2345/');
});
//# sourceMappingURL=server.js.map