import express, { Routes} from 'express';
const message = require('../components/messages/network');

const routes: Routes = (server) => {
    server.use('/message', message)
}

module.exports = routes;