import { EntityRepository, Repository } from 'typeorm';

import Faqs from '../models/Faqs';

@EntityRepository(Faqs)
class FaqRepository extends Repository<Faqs> {
    public async findByDate(date: Date): Promise<Faqs | null> {
        const findFaq = await this.findOne({
            where: { date },
        });
        return findFaq || null;
    }
}

export default FaqRepository;
