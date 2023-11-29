import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";

@Module({
  // 向外提供一个Service
  exports:[SystemService],
  // 可自动注入
  providers:[SystemService]
})
export class SharedModule {

}