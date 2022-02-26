import { Injectable } from '@nestjs/common';
import { CriarCartelaDto } from './dto/criar-cartela.dto';
import { PrismaService } from 'src/prisma.service';
import { Cartela } from '@prisma/client';

@Injectable()
export class CartelaService {
  constructor(private prismaService: PrismaService){}

async create(criarCartelaDto: CriarCartelaDto){
  const list = [];
  const ncartela = [];
  const  numberRandon = (min, max) => {
    min = Math.ceil(1);
    max = Math.floor(60);
    const numRandom1 = Math.floor(Math.random() * (max - min + 1)) + min;
    const numRandom2 = Math.floor(Math.random() * (max - min + 1)) + min;
    const numRandom3 = Math.floor(Math.random() * (max - min + 1)) + min;

    for(let j = 0; j < 5; j++){
      list.push(j + numRandom1)
      list.push(j + numRandom2)
      list.push(j + numRandom3)
       }
  }
  numberRandon(1,60);



const qtd = criarCartelaDto.cartela;

  const criarCartela = await this.prismaService.cartela.create({
    data: {
      cartela: criarCartelaDto.cartela,
      numerosDaCartela: criarCartelaDto.numerosDaCartela,
      imagem : criarCartelaDto.imagem,
    }

  })

  criarCartela.numerosDaCartela = list;

  for(let i = 0; i < qtd; i++){
    ncartela.push({criarCartela})          
 }  
 return ncartela;
}

}


