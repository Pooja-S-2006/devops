// Logger utility
export class Logger {
    constructor(level = 'info') {
        this.level = level;
        this.levels = { debug: 0, info: 1, warn: 2, error: 3 };
    }

    debug(message, ...args) {
        if (this.levels.debug >= this.levels[this.level]) {
            console.debug(`[DEBUG] ${message}`, ...args);
        }
    }

    info(message, ...args) {
        if (this.levels.info >= this.levels[this.level]) {
            console.info(`[INFO] ${message}`, ...args);
        }
    }

    warn(message, ...args) {
        if (this.levels.warn >= this.levels[this.level]) {
            console.warn(`[WARN] ${message}`, ...args);
        }
    }

    error(message, ...args) {
        if (this.levels.error >= this.levels[this.level]) {
            console.error(`[ERROR] ${message}`, ...args);
        }
    }
}

export const logger = new Logger();
