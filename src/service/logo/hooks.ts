import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '@/constants';

import { LogoService } from './service';

export const useCreateLogo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: LogoService.createLogo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.LOGO] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetLogoStatus = (requestId: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.LOGO, requestId],
    queryFn: () => LogoService.getLogoStatus(requestId),
  });
};
