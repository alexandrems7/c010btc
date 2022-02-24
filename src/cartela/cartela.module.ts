import { Module } from '@nestjs/common';
import { CartelaService } from './cartela.service';
import { CartelaController } from './cartela.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [CartelaController],
  providers: [CartelaService, PrismaService]
})
export class CartelaModule {}
