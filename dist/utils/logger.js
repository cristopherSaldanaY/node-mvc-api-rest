"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const { combine, timestamp, printf } = winston_1.format;
const customFormat = printf(({ timestamp, level, message }) => {
    return `${timestamp} [${level}]: ${message}`;
});
const logger = (0, winston_1.createLogger)({
    level: 'info',
    format: combine(timestamp(), customFormat),
    transports: [
        new winston_1.transports.Console(),
        new winston_1.transports.File({ filename: 'combined.log' })
    ],
});
exports.logger = logger;
//# sourceMappingURL=logger.js.map