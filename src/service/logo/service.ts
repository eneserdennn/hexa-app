import { apiClient } from '../client';
import { Logo } from './types';

export const LogoService = {
  createLogo: async (logo: Logo) => {
    const response = await apiClient.post('/createLogo', logo);
    return response.data;
  },
  getLogoStatus: async (requestId: string) => {
    const response = await apiClient.get('/getLogoStatus', {
      params: {
        requestId,
      },
    });
    return response.data;
  },
};
