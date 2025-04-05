import { CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class CommonBigPKEntity {
    @PrimaryGeneratedColumn({ type: 'bigint'}) //해당 데코레이터는 1씩 자동으로 증가하는 Auto Increment가 걸린 PK(기본키)를 만드는 칼럼임.
    id: string;

    @CreateDateColumn({ type: 'timestamp'}) //해당 데코레이터는 생성일자를 적용
    createdAt : Date;

    @UpdateDateColumn({ type: 'timestamp', nullable: true}) //update 쿼리를 날릴 때, 자동으로 수정일자를 넣어줌
    updatedAt : Date | null;

    @DeleteDateColumn({ type: 'timestamp', nullable: true}) // Soft Delete를 위한 칼럼을 말함. typeorm의 softDelete 함수를 사용해서 삭제 날짜를 넣어줌.
    deletedAt : Date | null;
}