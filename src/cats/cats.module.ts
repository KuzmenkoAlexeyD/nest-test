import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageRepository } from 'src/images/image.repository';
import { ImageService } from 'src/images/image.service';
import { CatsController } from './cats.controller';
import { Cat } from './cats.entity';
import { CatsRepository } from './cats.repository';
import { CatsService } from './cats.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cat, CatsRepository, ImageRepository])],
  controllers: [CatsController],
  providers: [CatsService, ImageService]
})
export class CatsModule {}
