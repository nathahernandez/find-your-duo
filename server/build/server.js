"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PORT = 3000;
const app = (0, express_1.default)();
app.get('/anuncios', (req, res) => {
    return res.json([
        {
            id: 1,
            name: 'EXEMPLO1'
        },
        {
            id: 1,
            name: 'EXEMPLO1'
        },
        {
            id: 1,
            name: 'EXEMPLO1'
        }
    ]);
});
app.listen(PORT);
