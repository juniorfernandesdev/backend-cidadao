import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateCategoryServices from '../services/CreateCategoryServices';
import CategoryRepository from '../repositories/CategoryRepository';

const categoriesRouter = Router();

categoriesRouter.get('/', async (request, response) => {
    const categoriesRepository = getCustomRepository(CategoryRepository);
    const categories = await categoriesRepository.find();
    return response.json(categories);
});

categoriesRouter.post('/', async (request, response) => {
    try {
        const { name } = request.body;

        const createCategory = new CreateCategoryServices();

        const category = await createCategory.execute({
            name,
        });

        return response.json(category);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default categoriesRouter;
