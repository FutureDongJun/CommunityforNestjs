import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany } from "typeorm";
import { CommonBigPKEntity } from "./common.entity";
import { UserEntity } from "./user.entity";
import { CommentEntity } from "./comment.entity";

@Entity('Article')
export class ArticleEntity extends CommonBigPKEntity {
    @Column('varchar', { unique: false, nullable: false})
    title: string;

    @Column('varchar', { unique: false, nullable: false})
    content: string;

    @Column('bigint', { unique: false, nullable: false})
    userId: string

    @ManyToOne(() => UserEntity, (user) => user.articles) //N:1 관계, TypeORM이 둘의 관계를 알려면 상호적으로 둘 다 설정해줘야함.
    @JoinColumn({ name: 'userId', referencedColumnName: 'id'}) // userId라는 이름의 칼럼이 '외래키' 라는 것을 나타냄. 관계를 맺은 테이블 중 한쪽에만 작성해주면 됨. 보통 외래키가 있는 쪽에 작성함.
    user: UserEntity;

    @OneToMany(() => CommentEntity, (comment) => comment.article)
    comments: CommentEntity[];
}