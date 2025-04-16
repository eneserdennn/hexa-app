export interface Logo {
  prompt: string;
  style: number;
}

export interface Timestamp {
  _seconds: number;
  _nanoseconds: number;
}

export enum LogoStatusType {
  Processing = 'processing',
  Done = 'done',
  Failed = 'failed',
}

export interface LogoStatusResponse {
  completedAt: Timestamp | null;
  createdAt: Timestamp;
  requestId: string;
  resultImageUrl: string | null;
  status: LogoStatusType;
  success: boolean;
}

export interface LogoCreateResponse {
  message: string;
  requestId: string;
  success: boolean;
}
