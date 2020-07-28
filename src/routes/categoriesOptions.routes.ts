import { Router } from 'express';

import CreateCategoryOptionServices from '../services/CreateCategoryOptionServices';

const categoriesOptionsRouter = Router();

categoriesOptionsRouter.post('/', async (request, response) => {
    try {
        const {
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
        } = request.body;

        const createUser = new CreateCategoryOptionServices();

        const user = await createUser.execute({
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

        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default categoriesOptionsRouter;
