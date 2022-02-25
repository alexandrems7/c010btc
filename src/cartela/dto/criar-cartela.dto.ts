import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";


export class CriarCartelaDto {

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    cartela: number;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    numerosDaCartela: string;

    @ApiProperty()
    @IsString()
    @IsOptional()
    imagem: string;

}