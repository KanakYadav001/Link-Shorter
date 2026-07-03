const express = require('express');

const cookieParser = require('cookie-parser');
const UserRouter = require('./routers/user.route');
const LinkRouter = require('./routers/link.route');

const app = express();


app.use(cookieParser());
app.use(express.json());


app.use('/api', UserRouter);
app.use('/api', LinkRouter);






module.exports = app;