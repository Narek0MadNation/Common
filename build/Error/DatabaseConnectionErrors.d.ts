import CustomError from "./CustomError";
declare class DatabaseConnectionError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
export default DatabaseConnectionError;
