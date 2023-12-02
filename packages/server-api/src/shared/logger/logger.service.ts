import { Injectable, Scope } from '@nestjs/common';
import { createLogger, Logger, transports, format } from 'winston';

// import { any } from '../request-context/request-context.dto';

@Injectable({ scope: Scope.TRANSIENT })

export class AppLogger {
  private context?: string;
  private logger: Logger;

  public setContext(context: string): void {
    this.context = context;
  }

  constructor() {
    // 实例化配置logger
    this.logger = createLogger({
       // 分级
      level: process.env.LOGGER_LEVEL,
      // 格式化
      format: format.combine(
        format.timestamp(),
        format.prettyPrint(),
      ),
      // 日志输出目录
      transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/error.log', level: 'error' }),
        new transports.File({ filename: 'logs/combined.log' }),
      ],
    });
  }

  // logger.error()  error级别的log
  error(
    // 上下文
    ctx: any,
    message: string,
    // error相关的数据
    meta?: Record<string, any>,
  ): Logger {

    return this.logger.error({
      message,
      contextName: this.context,
      ctx,
      ...meta,
    });
  }

  warn(
    ctx: any,
    message: string,
    meta?: Record<string, any>,
  ): Logger {
    return this.logger.warn({
      message,
      contextName: this.context,
      ctx,
      ...meta,
    });
  }

  debug(
    ctx: any,
    message: string,
    meta?: Record<string, any>,
  ): Logger {

    return this.logger.debug({
      message,
      contextName: this.context,
      ctx,
      ...meta,
    });
  }

  verbose(
    ctx: any,
    message: string,
    meta?: Record<string, any>,
  ): Logger {
    return this.logger.verbose({
      message,
      contextName: this.context,
      ctx,
      ...meta,
    });
  }

  log(
    ctx: any,
    message: string,
    meta?: Record<string, any>,
  ): Logger {
    return this.logger.info({
      message,
      contextName: this.context,
      ctx,
      ...meta,
    });
  }
}

