import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BolaService } from './bola.service';
import { CriarBolaDto } from './dto/criar-bola.dto';

@ApiTags('bola')
@Controller('bola')
export class BolaController {
  constructor(private readonly bolaService: BolaService) {}


  @Post()
  @ApiOperation({
    summary: 'Criar Bola'
  })
  create(@Body() criarBolaDto: CriarBolaDto){
    const bolaRandon = (min, max) => {
      min = Math.ceil(1);
      max = Math.floor(60);
      const numRandom = Math.floor(Math.random() * (max - min +1)) + min;
      const bola = [];

      for(let i = 0; i < 15; i++){
        bola.push(i + numRandom)
      }
      criarBolaDto.bola = bola.toString();
      console.log(numRandom);  
    }
    bolaRandon(1,60)
    
    return this.bolaService.create(criarBolaDto);
  }
  
}
