import { Module } from "@nestjs/common";
import { SystemService } from "./system.service";
import { ConfigModule } from "@nestjs/config";
import { configModuleOptions } from "./configs/module-options";
import { DatabaseProviders } from "./database.providers";
import { AppLoggerModule } from "./logger/logger.module";

@Module({
  // 向外提供一个Service
  exports:[
    SystemService,
    ConfigModule,
    ...DatabaseProviders,
    AppLoggerModule
  ],
  // 可自动注入
  providers:[SystemService,...DatabaseProviders],
  // 导入
  imports:[
    ConfigModule.forRoot(configModuleOptions),
    AppLoggerModule
  ]
})

export class SharedModule {

}