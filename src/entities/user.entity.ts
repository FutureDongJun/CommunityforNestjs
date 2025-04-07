import { Column, Entity, OneToMany } from 'typeorm';
import { ArticleEntity } from './article.entity';
import { CommentEntity } from './comment.entity';
import { CommonBigPKEntity } from './common.entity';


@Entity('User') // 테이블 이름을 User로 설정해주는 데코레이터
export class UserEntity extends CommonBigPKEntity {
    @Column('varchar', { unique: true, nullable: false}) // 일반적인 칼럼.
    email: string;

    @Column('varchar', { unique: false, nullable: false})
    password: string;

    @OneToMany(() => ArticleEntity, (article) => article.user) // 원투매니, 1:N 관계
    articles: ArticleEntity[];

    @OneToMany(() => CommentEntity, (comment) => comment.user)
    comments: CommentEntity[];
}