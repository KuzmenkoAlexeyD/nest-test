import { ApiProperty } from "@nestjs/swagger";
import { ImageEntity } from "src/images/image.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cat{

    @ApiProperty({example: 1, description: 'Уникальный идентификатор'})
    @PrimaryGeneratedColumn()
    public id: number;

    @ApiProperty({example: 'Кот', description: 'Имя котика'})
    @Column()
    public name: string;

    @ApiProperty({example: 'Белый', description: 'Цвет котика'})
    @Column()
    public color: string;

    @ApiProperty({example: 'Мейн-кун', description: 'Порода котика'})
    @Column()
    public breed: string;

    @ApiProperty({example: 5, description: 'Возраст котика в годах'})
    @Column({type: "numeric"})
    public age: number;

    @ApiProperty({example: 500, description: 'Стоимость аренды за час'})
    @Column({type: "numeric"})
    public price: number;

    @ApiProperty({example: 'true || false', description: 'Отметка о том забронирова котик или нет'})
    @Column({type: "boolean", default: false})
    public isReserved: boolean;
    
    @ApiProperty({example: '', description: 'Фото котика'})
    @OneToOne(
        () => ImageEntity,
        {
            eager: true,
            nullable: true
        }
    )
    @JoinColumn({
        name: "photo"
    })
    public image?: ImageEntity;
}