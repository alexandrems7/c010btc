import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";



export class CriarBolaDto{

@ApiProperty()   
@IsNotEmpty()
@IsString()    
bola: string;
}