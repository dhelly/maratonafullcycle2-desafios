import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MaratonasModule } from './maratonas/maratonas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maratona } from './maratonas/maratonas.entity';

@Module({
  imports: [
    MaratonasModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'database.sqlite',
      entities: [ Maratona ],
   })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
