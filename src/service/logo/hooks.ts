import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { LogoService } from './service';

export const useCreateLogo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: LogoService.createLogo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['logo'] });
    },
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetLogoStatus = (requestId: string) => {
  return useQuery({
    queryKey: ['logo', requestId],
    queryFn: () => LogoService.getLogoStatus(requestId),
  });
};
