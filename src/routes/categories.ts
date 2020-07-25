import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateFaqServices from '../services/CreateFaqServices';
import FaqRepository from '../repositories/FaqRepository';

const faqsRouter = Router();

faqsRouter.get('/', async (request, response) => {
    const faqsRepository = getCustomRepository(FaqRepository);
    const faqs = await faqsRepository.find();
    return response.json(faqs);
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
