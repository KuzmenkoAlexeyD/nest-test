import { ApiProperty } from "@nestjs/swagger";
import { Length } from "class-validator";

export class UpdateCatDto{

    @ApiProperty({example: 'Кот', description: 'Имя котика'})
    @Length(2, 25)
    public name: string = '';

    @ApiProperty({example: 'Белый', description: 'Цвет котика'})
    @Length(2, 25)
    public color: string = '';

    @ApiProperty({example: 'Мейн-кун', description: 'Порода котика'})
    @Length(2, 25)
    public breed: string = '';

    @ApiProperty({example: 5, description: 'Возраст котика в годах'})
    public age: number = -1;

    @ApiProperty({example: 500, description: 'Стоимость аренды за час'})
    public price: number = -1;
}