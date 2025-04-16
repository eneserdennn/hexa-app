import { LogoStatusResponse, LogoStatusType } from '@/service';

type StatusType = 'error' | 'loading' | 'success';

export const getInfoChipStatus = (
  error: string | null,
  isCreating: boolean,
  isChecking: boolean,
  logoStatus: LogoStatusResponse | null,
): StatusType => {
  if (error) return 'error';
  if (isCreating || isChecking) return 'loading';
  if (logoStatus?.status === LogoStatusType.Done) return 'success';
  if (logoStatus?.status === LogoStatusType.Processing) return 'loading';
  return 'success';
};
