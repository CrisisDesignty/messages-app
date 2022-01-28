import express, { Request, Response, Router } from 'express';
import { textChangeRangeIsUnchanged } from 'typescript';
import { success, errors } from '../../network/response';

const controller = require('./controller');
const router: Router = express.Router();


router.get('/', (req: Request, res) => {
    controller.getAllMessages()
        .then((messageList) => {
            success(req, res, messageList, 200);
        })
        .catch(e => {
            errors(req, res, 'Unexpected Error', 500, e)
        })
});
router.post('/', async(req: Request, res: Response) => {
    const { user, message } = req.body
    try {        
        const fullMessage = await controller.addMessage(user, message)
        success(req, res, fullMessage, 201)
    } catch (error) {
        errors(req, res, "Invalid Data", 500, "Content error")
    }

    // controller.addMessage(req.body.user, req.body.message)
    //     .then((fullMessage)=>{
    //         success(req, res, fullMessage, 201);
    //     })
    //     .catch(e => {
    //         error(req, res, 'Invalid Data', 500, 'Controller Error');
    //     });
})

module.exports = router;