import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { hash } from 'bcrypt'

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async getMainPage() {
        return 'User Main Page';
    }

    async register(email: string, password: string) {
        const existedUser = await this.userRepository.findOne({
            where: {
                email: email,
            },
        }); // userRepository의 fineOne 함수를 이용해서 email 칼럼의 값이 입력된 변수에 담긴 이메일과 같은 user를 select 함.

        if (existedUser) {
            throw new BadRequestException('이미 해당 이메일이 존재합니다.');
        }

        const hashedPassword = await hash(password, 10);

        const user = await this.userRepository.save({
            email: email,
            password: hashedPassword,
        });

        return user;
    }

}