import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cat } from "./cats/cats.entity";
import { CatsModule } from "./cats/cats.module";
import { ImageEntity } from "./images/image.entity";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_BD,
            entities: [Cat, ImageEntity],
            synchronize: true,
            autoLoadEntities: true
          }),
        CatsModule,
    ]
})
export class AppModule {}