import { Router } from 'express';

const faqsRouter = Router();

faqsRouter.get('/', async (request, response) => {
    return response.json({ message: true });
});

faqsRouter.post('/', async (request, response) => {
    return response.json({ message: 'metodo post' });
});

export default faqsRouter;
