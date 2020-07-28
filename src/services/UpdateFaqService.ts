import { getRepository } from 'typeorm';
import Faq from '../models/Faqs';

interface Request {
    user_id: string;
    avatarFilename: string;
}

class UpdateUserAvatarService {
    public async execute({ user_id, avatarFilename }: Request): Promise<Faq> {
        const usersRepository = getRepository(Faq);

        const faq = await usersRepository.findOne(user_id);

        if (!faq) {
            throw new Error('Only authenticated users can chance faq.');
        }

        await usersRepository.save(faq);

        return faq;
    }
}

export default UpdateUserAvatarService;
