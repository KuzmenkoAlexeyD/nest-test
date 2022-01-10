import { EntityRepository, Repository } from "typeorm";
import { ImageEntity } from "./image.entity";

@EntityRepository(ImageEntity)
export class ImageRepository extends Repository<ImageEntity> {}