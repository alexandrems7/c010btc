import { Module } from '@nestjs/common';
import { BolaService } from './bola.service';
import { BolaController } from './bola.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [BolaController],
  providers: [BolaService, PrismaService]
})
export class BolaModule {}
