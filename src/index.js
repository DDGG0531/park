require('module-alias/register')

const express = require('express')

const app = express()

const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'user-service' },
  transports: [
    //
    // - Write all logs with level `error` and below to `error.log`
    // - Write all logs with level `info` and below to `combined.log`
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});


logger.log({
  level: 'error',
  message: 'HAHA'
});

logger.log({
  level: 'info',
  message: 'Hello distributed log files!'
});

const parkRoutes = require('@/routes/park');
const defaultRoutes = require('@/routes/default');


app.use(express.json())

app.use('/', parkRoutes);
app.use('/', defaultRoutes);


const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
