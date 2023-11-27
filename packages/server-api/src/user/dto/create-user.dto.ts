import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty(
    {
      example:"Holin"
    }
  )
  userName:string;

  @ApiProperty(
    {
      example:18
    }
  )
  age:number;

  @ApiProperty(
    {
      example:"176****8057"
    }
  )
  phoneNumber: string;

  @ApiProperty(
    {
      example:"Holin@outlook.com"
    }
  )
  email:string;
}
