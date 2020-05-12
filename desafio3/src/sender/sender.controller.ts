import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('sender')
export class SenderController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('sender')
  root() {
    return { };
  }
}
