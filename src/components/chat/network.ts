import express, { Request, Response, Router } from 'express';
import { success, errors } from '../../network/response';

const controller = require('./controller');
const router: Router = express.Router();


router.post('/', async (req: Request, res: Response): Promise<void> => {
    
})


router.get('/:userId', async (req: Request, res: Response): Promise<void> => {
    
})


module.exports = router;