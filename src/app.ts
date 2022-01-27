import express, { Application, Request, Response, NexFunction, Port } from 'express';

const app: Application = express();
const port: Port = 3000;

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, next: NexFunction) => {
    console.log(add(5, 5))
    res.send('Hello');
});

app.listen(port, () => console.log(`Server runing on port ${port}`))
