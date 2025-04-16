import { ENDPOINTS } from '@/constants';

import { apiClient } from '../client';
import { Logo } from './types';

export const LogoService = {
  createLogo: async (logo: Logo) => {
    const response = await apiClient.post(ENDPOINTS.CREATE_LOGO, logo);
    return response.data;
  },
  getLogoStatus: async (requestId: string) => {
    const response = await apiClient.get(ENDPOINTS.CHECK_LOGO_STATUS, {
      params: {
        requestId,
      },
    });
    return response.data;
  },
};
