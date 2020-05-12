import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SenderController } from './sender/sender.controller';
import { ReceiverController } from './receiver/receiver.controller';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'static'),
    }),
  ],
  controllers: [AppController, SenderController, ReceiverController],
  providers: [AppService],
})
export class AppModule {}
