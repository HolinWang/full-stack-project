import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, Matches, Max, Min, Length, IsEmail, isEmail } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ example: "Holin" })
  @IsNotEmpty()
  userName: string;

  @ApiProperty({ example: 18 })
  age: number;



  @ApiProperty({ example: "176****8057" })
  @Matches(/^1\d{10}$/g, { message: '请输入手机号' })
  phoneNumber: string;

  @ApiProperty({ example: "Holin@outlook.com" })
  @IsNotEmpty()
  @IsEmail()
  email: string;


  @ApiProperty({ example: '123456' })
  @IsNotEmpty()
  password?: string;

  salt?: string;

}
