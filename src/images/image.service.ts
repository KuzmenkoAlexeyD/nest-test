import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ImageRepository } from "./image.repository";
import {S3} from "aws-sdk";
import { v4 as uuid } from 'uuid';


@Injectable()
export class ImageService{
    constructor(@InjectRepository(ImageRepository) private imageRepository: ImageRepository){}

    async uploadFile(dataBuffer: Buffer, filename: string){
        const s3 = new S3;
        const uploadResult = await s3.upload({
            Bucket: process.env.AWS_PUBLIC_BUCKET_NAME,
            Body: dataBuffer,
            Key: `${uuid()}-${filename}`
        }).promise();

        const newFile = this.imageRepository.create({
            key: uploadResult.Key,
            url: uploadResult.Location
        })

        await this.imageRepository.save(newFile);
        return newFile
    }
}