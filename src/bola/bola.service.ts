import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CriarBolaDto } from './dto/criar-bola.dto';

@Injectable()
export class BolaService {
constructor(private PrismaService: PrismaService){}

 async create(criarBolaDto: CriarBolaDto){
 const gerarBola = await this.PrismaService.bola.create({
    data: {
        bola: criarBolaDto.bola,
    }
 }) 
return gerarBola;
}



}
