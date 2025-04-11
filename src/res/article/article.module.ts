import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ArticleEntity } from "src/entities/article.entity";

@Module({
    imports : [TypeOrmModule.forFeature([ArticleEntity])],
    controllers : [ArticleController],
    providers : [ArticleService],
})
export class ArticleModule {}