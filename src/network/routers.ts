import  { Aplication } from 'express';
const message = require('../components/messages/network');
const user = require('../components/user/network');

const routes = (server: Aplication) => {
    server.use('/message', message);
    server.use('/user', user);
}

module.exports = routes;