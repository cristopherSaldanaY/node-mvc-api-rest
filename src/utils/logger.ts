import { createLogger, transports, format } from 'winston';

const { combine, timestamp, printf } = format;

const customFormat = printf(({ timestamp, level, message }: { timestamp: string; level: string; message: string }) => {
  return `${timestamp} [${level}]: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(
    timestamp(),
    customFormat
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' })
  ],
});

export { logger };
