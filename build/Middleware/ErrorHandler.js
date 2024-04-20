"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const CustomError_1 = __importDefault(require("../Error/CustomError"));
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustomError_1.default) {
        return res.status(err.statusCode).send({
            errors: err.serializeErrors(),
        });
    }
    return res.status(400).send({
        errors: [{ message: "Something went wrong" }],
    });
};
exports.errorHandler = errorHandler;
