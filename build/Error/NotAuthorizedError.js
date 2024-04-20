"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthorizedError = void 0;
const CustomError_1 = __importDefault(require("./CustomError"));
class NotAuthorizedError extends CustomError_1.default {
    constructor() {
        super("Not Authorized");
        this.statusCode = 401;
        Object.setPrototypeOf(this, NotAuthorizedError.prototype);
    }
    serializeErrors() {
        return [{ message: "Not Authorized" }];
    }
}
exports.NotAuthorizedError = NotAuthorizedError;
