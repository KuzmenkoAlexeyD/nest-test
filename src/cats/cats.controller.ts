import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Cat } from './cats.entity';
import { UpdateCatDto } from './dto/update-cat.dto';
import { FileInterceptor, MulterModule } from '@nestjs/platform-express';
import { Express } from 'express';


@ApiTags('Котики')
@Controller('cats')
export class CatsController {

    constructor(private catsService: CatsService){}

    @ApiOperation({summary: 'Создание котика'})
    @ApiResponse({status: 200, type: Cat})
    @Post('/createCat')
    async create(@Body()  catDto: CreateCatDto){
        return await this.catsService.createCat(catDto);
    }

    @ApiOperation({summary: 'Получить информацию об одном котике по id'})
    @ApiResponse({status: 200, type: Cat})
    @Get('/get/:id')
    async getOne(@Param('id') id: number){
        return await this.catsService.getOneCat(id);
    }

    @ApiOperation({summary: 'Получить информацию о всех котиках'})
    @ApiResponse({status: 200, type: [Cat]})
    @Get()
    async getAll(){
        return await this.catsService.getAllCat();
    }

    @ApiOperation({summary: 'Изменить информацию о котике'})
    @ApiResponse({status: 200, type: Cat})
    @Put('/update/:id')
    async updateCat(@Param('id') id: number, @Body() updateDto: UpdateCatDto){
        return await this.catsService.setNewDataToCat(id, updateDto);
    }

    @ApiOperation({summary: 'Забронировать котика'})
    @ApiResponse({status: 200, type: Cat})
    @Put('/reserve/:id')
    async reserveCat(@Param('id') id: number){
        return await this.catsService.setReservationMeanToCat(id, true);
    }

    @ApiOperation({summary: 'Убрать бронь с котика'})
    @ApiResponse({status: 200, type: Cat})
    @Put('/unreserve/:id')
    async unreserveCat(@Param('id') id: number){
        return await this.catsService.setReservationMeanToCat(id, false);
    }

    @ApiOperation({summary: 'Получить информацию о всех забронированных котиках'})
    @ApiResponse({status: 200, type: [Cat]})
    @Get('/reserved')
    async getAllReservedCat(){
        return await this.catsService.getCatByReserveMean(true);
    }

    @ApiOperation({summary: 'Получить информацию о всех свободных котиках'})
    @ApiResponse({status: 200, type: [Cat]})
    @Get('/unreserved')
    async getAllUnreservedCat(){
        return await this.catsService.getCatByReserveMean(false);
    }

    @ApiOperation({summary: 'Удалить котика'})
    @ApiResponse({status: 200, type: Cat})
    @Delete('/deleteCat/:id')
    async deleteCat(@Param('id') id: number){
        return await this.catsService.deleteCat(id);
    }

    @ApiOperation({summary: "Добавить котику фотографию"})
    @Post('/setImage/:id')
    @UseInterceptors(FileInterceptor('file'))
    async setImage(@Param('id') id: number, @UploadedFile() file: Express.Multer.File){
        return this.catsService.setImage(id, file.buffer, file.originalname);
    }
}
