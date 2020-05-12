import { Controller, Get, Post, Body } from '@nestjs/common';
import { MaratonasService } from './maratonas.service';
import { MaratonaDto } from './interfaces/maratona.dto';


@Controller('maratona')
export class MaratonasController {

  constructor(private readonly maratonaService: MaratonasService) {}

  @Get()
  getMaratonas(){
    return this.maratonaService.findAll();
  }

  @Post()
    create(@Body() maratonaDto: MaratonaDto) {
      const { aula } = maratonaDto; 
      return this.maratonaService.create(aula);
    }
}
