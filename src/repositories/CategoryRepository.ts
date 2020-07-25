import { EntityRepository, Repository } from 'typeorm';

import Categories from '../models/Category';

@EntityRepository(Categories)
class CategoryRepository extends Repository<Categories> {
    public async findByDate(date: Date): Promise<Categories | null> {
        const findCategory = await this.findOne({
            where: { date },
        });
        return findCategory || null;
    }
}

export default CategoryRepository;
