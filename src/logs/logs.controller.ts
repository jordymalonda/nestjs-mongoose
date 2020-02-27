import { CreateLogDTO } from './dto/create-log.dto';
import { LogsService } from './logs.service';
import { Controller, Res, Body, HttpStatus, Post } from '@nestjs/common';

@Controller('logs')
export class LogsController {
  constructor(private logsService: LogsService) {}

  // add log
  @Post()
  async addLog(@Res() res, @Body() createLogDTO: CreateLogDTO) {
    const log = await this.logsService.addLog(createLogDTO);
    return res.status(HttpStatus.OK).json({
        message: "Log has been created successfully",
        log
    })
  }
}
