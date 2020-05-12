import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Maratona } from './maratonas.entity';

@Injectable()
export class MaratonasService {
  constructor(
    @InjectRepository(Maratona)
    private maratonaRepository: Repository<Maratona>,
  ) {}

  async findAll(): Promise<Maratona[]> {
    return await this.maratonaRepository.find();
  }

  async create(aula: string): Promise<Maratona> {

    const maratona = new Maratona();
    maratona.aula = aula;
    await this.maratonaRepository.save(maratona);
    return maratona;
  }
}
