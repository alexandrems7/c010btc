import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('cartela')
  numberRandon(min, max): Array<Array<number>>{
      
      min = Math.ceil(1);
      max = Math.floor(60);
      const numRandom = Math.floor(Math.random() * (max - min +1)) + min;
      const numRandom1 = Math.floor(Math.random() * (max - min +1)) + min;
      const numRandom2 = Math.floor(Math.random() * (max - min +2)) + min;
      const numRandom3 = Math.floor(Math.random() * (max - min +3)) + min;
      const numRandom4 = Math.floor(Math.random() * (max - min +1)) + min;
      const bola = numRandom;
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

      const listCartela = [cartela1,cartela2,cartela3,cartela4, bola];
      
      return listCartela;
 
  }

}
