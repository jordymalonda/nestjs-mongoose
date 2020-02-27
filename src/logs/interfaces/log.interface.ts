import { Document } from 'mongoose';

export interface Log extends Document {
  readonly type: string;
  readonly provider: string;
  readonly data: object;
  readonly status: string;
  readonly created_at: Date;
}