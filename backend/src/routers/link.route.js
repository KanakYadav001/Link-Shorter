const express = require('express');


const LinkRouter = express.Router();
const { createLink, getLink } = require('../controller/link.controller');

LinkRouter.get('/create', createLink );
LinkRouter.get('/:id', getLink);


module.exports = LinkRouter;