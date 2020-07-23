import { Router } from 'express';
import CreateFaqServices from '../services/CreateFaqServices';

const faqsRouter = Router();

faqsRouter.get('/', async (request, response) => {
    return response.json({ message: true });
});

faqsRouter.post('/', async (request, response) => {
    try {
        const { title, description } = request.body;

        const createFaq = new CreateFaqServices();

        const faq = await createFaq.execute({
            title,
            description,
        });

        return response.json(faq);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default faqsRouter;
