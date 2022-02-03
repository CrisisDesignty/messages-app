import express, { Request, Response, Router } from 'express';
import { success, errors } from '../../network/response';
import { ChatM } from '../../utils/interfaces';

const controller = require('./controller');
const router: Router = express.Router();


router.post('/', async (req: Request, res: Response): Promise<void> => {
    const chat = req.body;
    try {
        const addChat = await controller.add(chat)
        success(req, res, addChat, 201);
    } catch(err) {
        errors(req, res, 'Internal error', 500, err);
    }
})


router.get('/:userId', async (req: Request, res: Response): Promise<ChatM> => {
    try {
        const listChats = await controller.list(req.params.userId);
        success(req, res, listChats, 200);
        return listChats
    } catch(err) {
        errors(req, res, 'Internal Error', 500, err);
    }
})


module.exports = router;