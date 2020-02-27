import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Log } from './interfaces/log.interface';
import { CreateLogDTO } from './dto/create-log.dto';

@Injectable()
export class LogsService {
    constructor(@InjectModel('Log') private readonly logModel: Model<Log>) { }
    // fetch all logs
    async getAllLog(): Promise<Log[]> {
        const logs = await this.logModel.find().exec();
        return logs;
    }
    // Get a single log
    async getLog(logID): Promise<Log> {
        const log = await this.logModel.findById(logID).exec();
        return log;
    }
    // post a single log
    async addLog(createLogDTO: CreateLogDTO): Promise<Log> {
        const newLog = await this.logModel(createLogDTO);
        return newLog.save();
    }
    // Edit log details
    async updateLog(logID, createLogDTO: CreateLogDTO): Promise<Log> {
        const updatedLog = await this.logModel
            .findByIdAndUpdate(logID, createLogDTO, { new: true });
        return updatedLog;
    }
    // Delete a log
    async deleteLog(logID): Promise<any> {
        const deletedLog = await this.logModel.findByIdAndRemove(logID);
        return deletedLog;
    }
}