import express, { Request, Response, Router } from 'express';
import { success, errors } from '../../network/response';

const controller = require('./controller');
const router: Router = express.Router();


router.get('/', (req: Request, res) => {
    const filterMessages = req.query.user || null;
    controller.getAllMessages(filterMessages)
        .then((messageList) => {
            success(req, res, messageList, 200);
        })
        .catch(e => {
            errors(req, res, 'Unexpected Error', 500, e)
        })
});
router.post('/', async(req: Request, res: Response): Promise<void> => {
    const { user, message } = req.body
    try {        
        const fullMessage = await controller.addMessage(user, message)
        success(req, res, fullMessage, 201)
    } catch (error) {
        errors(req, res, "Invalid Data", 500, "Content error")
    }
})

// Update message
router.patch('/:id', async (req: Request, res: Response): Promise<void> => {
    try {
        const data = await controller.updateMessage(req.params.id, req.body.message);
        success(req, res, data, 200);
    } catch(e) {
        errors(req, res, 'Internal Error', 500, e);
    }
});

// Delete message
router.delete('/:id', async(req: Request, res: Response): Promise<void> => {
    try {
        await controller.deleteMessage(req.params.id);
        success(req, res, `Message of the user: ${req.params.id} was deleted`, 200)
    } catch(err) {
        console.error(err);
        errors(req, res, 'Internal error', 500, err)
    }
})

module.exports = router;