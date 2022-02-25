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

    // for(let j = 0; j < 15; j++){
    //   list.push(j + numRandom1)
    //    }
  }
  numberRandon(1,60);

  function gerador(tamanho) {
    //essa funçao e pra gerar ums string aleatoria pra usar nos games
    var stringAleatoria = "";
    var caracteres = "asd123";
    for (var i = 0; i < tamanho; i++) {
      stringAleatoria += caracteres.charAt(
        Math.floor(Math.random() * caracteres.length)
      );
    }
  }

const qtd = criarCartelaDto.cartela;
const min = Math.ceil(1);
const max = Math.floor(60);
const numRandom1 = Math.floor(Math.random() * (max - min + 1)) + min;

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
    for(let j = 0; j < 15; j++){
      list.push(j + numRandom1)
         }          
 }

  console.log(ncartela);
  
 return ncartela;
}

}


