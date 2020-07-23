import { getRepository } from 'typeorm';

import Faq from '../models/Faqs';

interface Request {
    title: string;
    description: string;
}

class CreateFaqService {
    public async execute({ title, description }: Request): Promise<Faq> {
        const faqsRepository = getRepository(Faq);

        const faqs = faqsRepository.create({
            title,
            description,
        });

        await faqsRepository.save(faqs);
        return faqs;
    }
}

export default CreateFaqService;
