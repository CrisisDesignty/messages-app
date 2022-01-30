import express, { Request, Response, Router } from 'express';
import { success, errors } from '../../network/response';

const controller = require('./controller');
const router: Router = express.Router();

router.post('/', async (req: Request, res: Response): Promise<void> => {
    const user = req.body;
    user.registerDate = new Date();
    try {
        const addUser = await controller.addUser(user)
        success(req, res, addUser, 201)
    } catch(err){
        errors(req, res, 'Internal error', 500, err);
    }
})

router.get('/', async (req: Request, res: Response) => {
    try {
        const users = await controller.listUsers();
        success(req, res, users, 200);
    } catch(err) {
        errors(req, res, 'Internal error', 500, err)
    }
})

module.exports =  router;