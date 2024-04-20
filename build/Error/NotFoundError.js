"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = void 0;
const CustomError_1 = __importDefault(require("./CustomError"));
class NotFoundError extends CustomError_1.default {
    constructor() {
        super("Route Not Found");
        this.statusCode = 404;
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }
    serializeErrors() {
        return [{ message: "Route Not Found" }];
    }
}
exports.NotFoundError = NotFoundError;
