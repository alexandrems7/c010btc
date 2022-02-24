import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  numberRandon(cartela: Array<number>):Array<number> {
    return cartela;
  }
}
