"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.use('/', function (req, res) {
    res.send('App running.');
});
app.use('*', function (req, res) {
    res.send('Wooww, you\'re a deep digger');
});
app.listen('3003', function () {
    console.log('3003');
});
