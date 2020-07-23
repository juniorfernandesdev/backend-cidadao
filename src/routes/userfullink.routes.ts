import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import CreateUserFulLinkServices from '../services/CreateUserFulLinkServices';
import UserfulLinkRepository from '../repositories/UserfulLinkRepository';

const userfullinkRepository = Router();

userfullinkRepository.get('/', async (request, response) => {
    const userFulLinkRepository = getCustomRepository(UserfulLinkRepository);
    const userFulLink = await userFulLinkRepository.find();
    return response.json(userFulLink);
});

userfullinkRepository.post('/', async (request, response) => {
    try {
        const { name, link } = request.body;

        const createUserFulLink = new CreateUserFulLinkServices();

        const userFulLink = await createUserFulLink.execute({
            name,
            link,
        });

        return response.json(userFulLink);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default userfullinkRepository;
