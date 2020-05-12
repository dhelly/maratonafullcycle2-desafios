import { Maratona } from './maratonas.entity';
import { EntityRepository, Repository } from 'typeorm';
import { MaratonaDto } from './interfaces/maratona.dto';


@EntityRepository(Maratona)
export class MaratonaRepository extends Repository<Maratona> {
  createMaratona = async (maratonaDto: MaratonaDto) => {
    return await this.save(maratonaDto);
  };
}