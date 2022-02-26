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
   return this.cartelaService.create(criarCartelaDto);
}
}
