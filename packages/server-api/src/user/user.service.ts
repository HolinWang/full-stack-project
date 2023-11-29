import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { SystemService } from 'src/shared/system.service';
import { ConfigService } from '@nestjs/config';

//  可注入的  @Injectable()
@Injectable()
export class UserService {
  constructor(
    private readonly systemService:SystemService,
    private readonly configService:ConfigService
    ){}


  create(createUserDto: CreateUserDto) {
    console.log("ENV",this.systemService.getEnv(),this.configService.get<string>("database.url"));
    throw new HttpException("新增失败,自定义异常冲突",HttpStatus.CONFLICT);
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
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
}
