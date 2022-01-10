import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './cats.entity';
import { CatsRepository } from './cats.repository';
import { UpdateCatDto } from './dto/update-cat.dto';
import { ImageService } from 'src/images/image.service';


@Injectable()
export class CatsService {

    constructor(@InjectRepository(Cat) private catsRepository: CatsRepository,
                private readonly imageService: ImageService) {}

    async createCat(dto: CreateCatDto){
        const cat = this.catsRepository.create({...dto});
        await this.catsRepository.save(cat);
        return {...cat};
    }

    async getAllCat(){
        const cat = await this.catsRepository.find();
        return cat;
    }

    async getOneCat(id:number){
        const cat = await this.catsRepository.findOne(id);
        return cat;
    }

    async setNewDataToCat(id: number, dto: UpdateCatDto){
        const cat = await this.catsRepository.findOne(id);

        if(dto.name){
            cat.name = dto.name;
        }
        if(dto.breed){
            cat.breed = dto.breed;
        }
        if(dto.color){
            cat.color = dto.color;
        }
        if(dto.age !== -1){
            cat.age = dto.age;
        }
        if(dto.price !== -1){
            cat.price = dto.price;
        }

        return await this.catsRepository.save(cat);
    }

    async setReservationMeanToCat(id: number, mean: boolean){
        const cat = await this.catsRepository.findOne(id);
        cat.isReserved = mean;
        return await this.catsRepository.save(cat);
    }

    async getCatByReserveMean(mean: boolean){
        const cat = await this.catsRepository.find({ where: {isReserved: mean}});
        return cat;
    }

    async deleteCat(id: number){
        return await this.catsRepository.delete(id);
    }

    async setImage(id: number, imageBuffer: Buffer, filename: string){
        const image = await this.imageService.uploadFile(imageBuffer, filename);
        const cat = await this.catsRepository.findOne(id);
        const imageCat = this.catsRepository.create({...cat, image: image});
        await this.catsRepository.save(imageCat);
        return image; 
    }
}
