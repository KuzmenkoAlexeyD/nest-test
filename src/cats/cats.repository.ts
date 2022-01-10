import { EntityRepository, Repository } from "typeorm";
import { Cat } from "./cats.entity";

@EntityRepository(Cat)
export class CatsRepository extends Repository<Cat>{}
