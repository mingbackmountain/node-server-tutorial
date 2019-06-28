"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const port = 3000;
function callback() {
    console.log(`Application running on port:${port}`);
}
const path = "/home";
const handler = (request, response, next) => {
    response.send("Get Home");
};
app.get(path, handler);
const homeIdPath = "/home/:id";
app.get(homeIdPath, (request, response, next) => {
    const params = request.params;
    response.status(200).send(params);
});
app.listen(port, callback);
