// Error handling utilities
export class AppError extends Error {
    constructor(message, code = 'APP_ERROR', statusCode = 500) {
        super(message);
        this.name = 'AppError';
        this.code = code;
        this.statusCode = statusCode;
        this.timestamp = new Date().toISOString();
    }
}

export class ValidationError extends AppError {
    constructor(message, field = null) {
        super(message, 'VALIDATION_ERROR', 400);
        this.name = 'ValidationError';
        this.field = field;
    }
}

export class NetworkError extends AppError {
    constructor(message, statusCode = 0) {
        super(message, 'NETWORK_ERROR', statusCode);
        this.name = 'NetworkError';
    }
}

export function handleError(error, logger = console.error) {
    if (error instanceof AppError) {
        logger(`${error.name}: ${error.message}`, {
            code: error.code,
            statusCode: error.statusCode,
            timestamp: error.timestamp,
            stack: error.stack
        });
    } else {
        logger(`Unexpected error: ${error.message}`, {
            stack: error.stack
        });
    }
}
