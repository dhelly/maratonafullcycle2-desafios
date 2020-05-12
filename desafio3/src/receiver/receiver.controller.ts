import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from '../app.service';

@Controller('receiver')
export class ReceiverController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('receive')
  root() {
    return { };
  }
}
