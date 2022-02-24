import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartelaService } from './cartela.service';
import { CriarCartelaDto } from './dto/criar-cartela.dto';


@ApiTags('cartela')
@Controller('cartela')
export class CartelaController {
  constructor(private readonly cartelaService: CartelaService) {}

@Post()
@ApiOperation({
  summary: 'Criar Cartela'
})

create(@Body() criarCartelaDto: CriarCartelaDto){
  
  const msg = 'O numero maximo de cartelas é 4'

  const  numberRandon = (min, max) => {  
    min = Math.ceil(1);
    max = Math.floor(60);
    
    const numRandom1 = Math.floor(Math.random() * (max - min +1)) + min;
    const numRandom2 = Math.floor(Math.random() * (max - min +2)) + min;
    const numRandom3 = Math.floor(Math.random() * (max - min +3)) + min;
    const numRandom4 = Math.floor(Math.random() * (max - min +1)) + min;
    
    const cartela1 = [];
    const cartela2 = [];
    const cartela3 = [];
    const cartela4 = [];

    for(let i = 0; i < 15; i++){
      cartela1.push(i + numRandom1)
    }
    for(let i = 0; i < 15; i++){
      cartela2.push(i + numRandom2)
    }
    for(let i = 0; i < 15; i++){
      cartela3.push(i + numRandom3)
    }
    for(let i = 0; i < 15; i++){
      cartela4.push(i + numRandom4)
    }


    if(criarCartelaDto.cartela === 0){
      criarCartelaDto.cartela = 1
      criarCartelaDto.numerosDaCartela = cartela1.toString();
    }else if(criarCartelaDto.cartela > 1 && criarCartelaDto.cartela == 2){
      criarCartelaDto.numerosDaCartela = `${cartela1.toString()} ${cartela2.toString()}`;
   }else if(criarCartelaDto.cartela > 2 && criarCartelaDto.cartela == 3){
    criarCartelaDto.numerosDaCartela = `${cartela1.toString()} ${cartela2.toString()} ${cartela3.toString()}`;
   }else if(criarCartelaDto.cartela > 3 && criarCartelaDto.cartela == 4){
    criarCartelaDto.numerosDaCartela = `${cartela1.toString()} ${cartela2.toString()} ${cartela3.toString()} ${cartela4.toString()}`;
   }else if(criarCartelaDto.cartela > 4){
    return msg;
   }
     
}
numberRandon(1,60);
return this.cartelaService.create(criarCartelaDto);

}






}
