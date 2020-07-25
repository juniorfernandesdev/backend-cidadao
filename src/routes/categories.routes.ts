import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateCategoryServices from '../services/CreateFaqServices';
import CategoryRepository from '../repositories/CategoryRepository';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
    const categoriesRepository = getCustomRepository(CategoryRepository);
    const categories = await categoriesRepository.find();
    return response.json(categories);
});

categoriesRouter.post('/', async (request, response) => {
    try {
        const { title, description } = request.body;

        const createRepository = new CreateCategoryServices();

        const repository = await createRepository.execute({
            title,
            description,
        });

        return response.json(repository);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default categoriesRouter;
