import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { AppModule } from "./app.module";
import * as AWS from 'aws-sdk';

async function start() {
    const PORT = process.env.PORT || 8080;
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: process.env.AWS_REGION
    });
    const app = await NestFactory.create(AppModule)

    const config = new DocumentBuilder()
        .setTitle('Cats booking service')
        .setDescription('тз по REST API')
        .setVersion('1.0')
        .addTag('хех')
        .build()
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/docs', app, document);

    await app.listen(PORT, () => console.log(`On this port: ${PORT}`));
}

start()