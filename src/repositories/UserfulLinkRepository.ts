import { EntityRepository, Repository } from 'typeorm';

import UsefulLinks from '../models/UsefulLinks';

@EntityRepository(UsefulLinks)
class UserfulLinkRepository extends Repository<UsefulLinks> {
    public async findByDate(date: Date): Promise<UsefulLinks | null> {
        const findUserfulLink = await this.findOne({
            where: { date },
        });
        return findUserfulLink || null;
    }
}

export default UserfulLinkRepository;
