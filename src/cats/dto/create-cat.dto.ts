import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Length, Max, Min } from "class-validator";

export class CreateCatDto{

    @ApiProperty({example: 'Кот', description: 'Имя котика'})
    @IsNotEmpty()
    @Length(2, 25)
    public name: string;

    @ApiProperty({example: 'Белый', description: 'Цвет котика'})
    @IsNotEmpty()
    @Length(2, 25)
    public color: string;

    @ApiProperty({example: 'Мейн-кун', description: 'Порода котика'})
    @IsNotEmpty()
    @Length(2, 25)
    public breed: string;

    @ApiProperty({example: 5, description: 'Возраст котика в годах'})
    @IsNotEmpty()
    @Min(0) 
    public age: number;

    @ApiProperty({example: 500, description: 'Стоимость аренды за час'})
    @IsNotEmpty()
    @Min(0) 
    public price: number;
}