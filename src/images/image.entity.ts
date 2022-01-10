import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class ImageEntity{

    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @PrimaryGeneratedColumn()
    public id: number;

    @ApiProperty({example: '', description: 'url картинки из s3'})
    @Column()
    public url: string;

    @ApiProperty({example: '', description: 'url картинки'})
    @Column()
    public key:string;
}