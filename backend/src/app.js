const express = require('express');

const cookieParser = require('cookie-parser');
const UserRouter = require('./routers/user.route');

const app = express();


app.use(cookieParser());
app.use(express.json());


app.use('/api', UserRouter);






module.exports = app;