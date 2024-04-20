"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const CustomError_1 = __importDefault(require("./CustomError"));
class RequestValidationError extends CustomError_1.default {
    constructor(errors) {
        super("Invalid Request Parameters");
        this.errors = errors;
        this.statusCode = 400;
        Object.setPrototypeOf(this, RequestValidationError.prototype);
    }
    serializeErrors() {
        return this.errors.map((error) => {
            if ("path" in error) {
                return { message: error.msg, field: error.path };
            }
            return { message: error.msg };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
