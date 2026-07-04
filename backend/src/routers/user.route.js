const express = require('express');

const UserRouter = express.Router();
const { register  , login , logout} = require('../controller/user.controller');

UserRouter.post('/register', register);
UserRouter.post('/login' , login);
UserRouter.post('/logout', logout);




module.exports = UserRouter;