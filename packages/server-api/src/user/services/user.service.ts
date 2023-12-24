import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { SystemService } from 'src/shared/system.service';
import { ConfigService } from '@nestjs/config';
import { MongoRepository } from 'typeorm';
import { User } from '../entities/user.mongo.entity';
import { AppLogger } from 'src/shared/logger/logger.service';
import { PaginationParams2Dto } from 'src/shared/dtos/paginaation-params.dto';
import { encryptPassword, makeSalt } from 'src/shared/utils/cryptogram.util';

//  可注入的  @Injectable()
@Injectable()
export class UserService {
  constructor(
    private readonly systemService:SystemService,
    private readonly configService:ConfigService,
    @Inject('USER_REPOSITORY')   // 通过注入 USER_REPOSITORY  =》 注册UserProviders 
    private readonly userRepository:MongoRepository<User>,

    private readonly logger:AppLogger
    ){
      this.logger.setContext(UserService.name)
    }


  create(user: CreateUserDto) {

    if(user.password){
      const {salt,hashPassword} = this.getPassWord(user.password);
      user.salt = salt;
      user.password = hashPassword;
    }
    this.logger.log(null,'user create')
    return this.userRepository.save({
      name:"Holin Wang",
      email:"Holin.Wwang@outlook.com"
    })
    // console.log("ENV",this.systemService.getEnv(),this.configService.get<string>("database.url"));
    // throw new HttpException("新增失败,自定义异常冲突",HttpStatus.CONFLICT);
    // return 'This action adds a new user';
  }

  // findAll() {
  //   this.logger.log(null,'user find all')
  //   return this.userRepository.findAndCount();
  // }

  async findAll({ pageSize, page }: PaginationParams2Dto): Promise<{ data: User[], count: number }> {
    const [data, count] = await this.userRepository.findAndCount({
      // 根据id排序
      order: { _id: 'DESC' },  
      skip: (page - 1) * pageSize,
      take: (pageSize * 1),
      cache: true,
    })
    return {
      data, count
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  getPassWord(password){
    const salt = makeSalt();
    const hashPassword = encryptPassword(password,salt);
    return {salt,hashPassword}
  }
}
