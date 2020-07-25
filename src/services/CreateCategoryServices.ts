import { getRepository } from 'typeorm';

import Category from '../models/Category';

interface Request {
    name: string;
}

class CreateCategoryService {
    public async execute({ name }: Request): Promise<Category> {
        const faqsRepository = getRepository(Category);

        const categories = faqsRepository.create({
            name,
        });

        await faqsRepository.save(categories);
        return categories;
    }
}

export default CreateCategoryService;
