import { Module } from '@nestjs/common';
import { TypeOrmModule} from '@nestjs/typeorm';
import { MaratonasController } from './maratonas.controller';
import { MaratonasService } from './maratonas.service';
import { Maratona } from './maratonas.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Maratona])],
  controllers: [MaratonasController],
  providers: [MaratonasService],
})
export class MaratonasModule {}
