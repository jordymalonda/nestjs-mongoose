/* eslint-disable @typescript-eslint/camelcase */

import * as mongoose from 'mongoose';

export const LogSchema = new mongoose.Schema({
  type: String,
  provider: String,
  data: Object,
  status: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});