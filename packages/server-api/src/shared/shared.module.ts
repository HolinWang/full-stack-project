import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";
import { ConfigModule } from "@nestjs/config";
import { configModuleOptions } from "./configs/module-options";
import { DatabaseProviders } from "./database.providers";

@Module({
  // 向外提供一个Service
  exports:[SystemService,ConfigModule,...DatabaseProviders],
  // 可自动注入
  providers:[SystemService,...DatabaseProviders],
  // 导入
  imports:[
    ConfigModule.forRoot(configModuleOptions)
  ]
})

export class SharedModule {

}