import { Request, Response } from 'express';


const success = (req: Request, res: Response, message: string, status: number) => {
    res.status(status || 200).send({
        error: '',
        body: message
    });
};

const errors = (req: Request, res: Response, message: string, status: number, details: string): void => {
    console.log(`[response error] ${details}`)

    res.status(status || 500).send({
        error: message,
        body: '',
    });
};

export { success, errors }