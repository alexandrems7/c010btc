import { Module } from '@nestjs/common';
import { CartelaModule } from './cartela/cartela.module';
import { BolaModule } from './bola/bola.module';


@Module({
  imports: [ CartelaModule, CartelaModule, BolaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
