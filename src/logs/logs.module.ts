import { LogSchema } from './schemas/log.schema';
import { Module } from '@nestjs/common';
import { LogsController } from './logs.controller';
import { LogsService } from './logs.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name: "Log", schema: LogSchema}])],
  controllers: [LogsController],
  providers: [LogsService]
})
export class LogsModule {}
