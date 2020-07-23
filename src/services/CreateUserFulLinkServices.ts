import { getRepository } from 'typeorm';

import UserFulLink from '../models/UsefulLinks';

interface Request {
    name: string;
    link: string;
}

class CreateUserfullinkService {
    public async execute({ name, link }: Request): Promise<UserFulLink> {
        const userFulLinksRepository = getRepository(UserFulLink);

        const userFulLinks = userFulLinksRepository.create({
            name,
            link,
        });

        await userFulLinksRepository.save(userFulLinks);
        return userFulLinks;
    }
}

export default CreateUserfullinkService;
