import { getRepository } from 'typeorm';

import CategoryOption from '../models/CategoryOption';

interface Request {
    name: string;
    category_id: boolean;
    has_anonymous: boolean;
    has_descriton: boolean;
    has_descriton_allegory: boolean;
    has_descriton_suggestion: boolean;
    has_descriton_request: boolean;
    has_descriton_acts_the_facts: boolean;
    has_descriton_involved: boolean;
    has_address: boolean;
    has_location: boolean;
    has_photo: boolean;
}

class CreateCategoryOptionService {
    public async execute({
        name,
        category_id,
        has_anonymous,
        has_descriton,
        has_descriton_allegory,
        has_descriton_suggestion,
        has_descriton_request,
        has_descriton_acts_the_facts,
        has_descriton_involved,
        has_address,
        has_location,
        has_photo,
    }: Request): Promise<CategoryOption> {
        const categoriesOptionsRepository = getRepository(CategoryOption);

        const categoryOption = categoriesOptionsRepository.create({
            name,
            category_id,
            has_anonymous,
            has_descriton,
            has_descriton_allegory,
            has_descriton_suggestion,
            has_descriton_request,
            has_descriton_acts_the_facts,
            has_descriton_involved,
            has_address,
            has_location,
            has_photo,
        });

        await categoriesOptionsRepository.save(categoryOption);
        return categoryOption;
    }
}

export default CreateCategoryOptionService;
