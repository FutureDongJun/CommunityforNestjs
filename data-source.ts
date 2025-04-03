import * as path from "path";
import { DataSource } from "typeorm";

export const dataSource =new DataSource({
    type: 'mysql', //어떤 DB를 사용할 건지
    host: 'localhost',
    port: 3306, //MySQL의 기본 포트
    database: 'myhomepage',
    username: 'root', //MySQL 설치 할 때 설정한 유저네임
    password: '0000',
    entities: [ // entity는 DB의 테이블을 지칭, 어떤 테이블이 사용되는지, 정보를 가져옴
        path.join(__dirname, 'src/entities/**/*.entity.js'),
        path.join(__dirname, 'dist/entities/**/*.entity.js'),
    ],
    synchronize: false,
    logging: true, // typeorm 쿼리가 실행될 때, 터미널에 MySQL 쿼리가 어떻게 짜였는지 보여줌
});