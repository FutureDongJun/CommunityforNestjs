import * as path from "path";
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';

dotenv.config({ path: `.env.dev`});

export const dataSource = new DataSource({
    type: 'mysql', //어떤 DB를 사용할 건지
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT), //MySQL의 기본 포트
    database: process.env.DB_NAME,
    username: process.env.DB_USER, //MySQL 설치 할 때 설정한 유저네임
    password: process.env.DB_PASSWORD,
    entities: [ // entity는 DB의 테이블을 지칭, 어떤 테이블이 사용되는지, 정보를 가져옴
        path.join(__dirname, 'src/entities/**/*.entity.js'),
        path.join(__dirname, 'dist/entities/**/*.entity.js'),
    ],
    synchronize: false,
    logging: true, // typeorm 쿼리가 실행될 때, 터미널에 MySQL 쿼리가 어떻게 짜였는지 보여줌
});