import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";
import { ConfigModule } from "@nestjs/config";
import { configModuleOptions } from "./configs/module-options";

@Module({
  // 向外提供一个Service
  exports:[SystemService,ConfigModule],
  // 可自动注入
  providers:[SystemService],
  // 导入
  imports:[
    ConfigModule.forRoot(configModuleOptions)
  ]
})
export class SharedModule {

}