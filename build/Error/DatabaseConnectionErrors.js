"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CustomError_1 = __importDefault(require("./CustomError"));
class DatabaseConnectionError extends CustomError_1.default {
    constructor() {
        super("Error connecting to database");
        this.statusCode = 500;
        this.reason = "Error connecting to database";
        Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
    }
    serializeErrors() {
        return [{ message: this.message }];
    }
}
exports.default = DatabaseConnectionError;
