// logger.js
const winston = require('winston');
const moment = require('moment-timezone'); 

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({
      format: () => moment().tz("Europe/Berlin").format('YYYY-MM-DD HH:mm:ss') // Set timestamp to Berlin time (Germany)
    }),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    
  ],
});

module.exports = logger;
