export class CreateLogDTO {
  readonly type: string;
  readonly provider: string;
  readonly data: object;
  readonly status: string;
  readonly created_at: Date;
}