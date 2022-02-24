import { Injectable } from '@nestjs/common';
import { CriarCartelaDto } from './dto/criar-cartela.dto';
import { PrismaService } from 'src/prisma.service';
import { Cartela } from '@prisma/client';

@Injectable()
export class CartelaService {
  constructor(private prismaService: PrismaService){}

async create(criarCartelaDto: CriarCartelaDto){


  const criarCartela = await this.prismaService.cartela.create({

    data: {
      cartela: criarCartelaDto.cartela,
      numerosDaCartela: criarCartelaDto.numerosDaCartela,
      imagem : criarCartelaDto.imagem,
    } 
    
  }) 

 return criarCartela;
}

}

