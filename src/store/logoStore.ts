import { create } from 'zustand';

import {
  Logo,
  LogoService,
  LogoStatusResponse,
  LogoStatusType,
} from '@/service';

interface LogoState {
  requestId: string | null;
  logoStatus: LogoStatusResponse | null;
  isCreating: boolean;
  isChecking: boolean;
  error: string | null;
  resultImageUrl: string | null;
  selectedStyle: number | null;
  prompt: string | null;

  createLogo: (logo: Logo) => Promise<void>;
  checkLogoStatus: () => Promise<void>;
  setSelectedStyle: (style: number) => void;
  setPrompt: (prompt: string) => void;
}

const useLogoStore = create<LogoState>((set, get) => ({
  requestId: null,
  logoStatus: null,
  isCreating: false,
  isChecking: false,
  error: null,
  resultImageUrl: null,
  selectedStyle: 0,
  prompt: null,

  setSelectedStyle: (style: number) => set({ selectedStyle: style }),
  setPrompt: (prompt: string) => set({ prompt }),

  createLogo: async (logo: Logo) => {
    try {
      set({ isCreating: true, error: null });
      const response = await LogoService.createLogo(logo);

      if (response.success) {
        set({ requestId: response.requestId });
        get().checkLogoStatus();
      } else {
        set({ error: 'Failed to create logo' });
      }
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Unknown error occurred' });
    } finally {
      set({ isCreating: false });
    }
  },

  checkLogoStatus: async () => {
    const { requestId } = get();
    if (!requestId) return;

    try {
      set({ isChecking: true, error: null });
      const status = await LogoService.getLogoStatus(requestId);
      set({ logoStatus: status });

      if (status.status === LogoStatusType.Processing) {
        setTimeout(() => {
          get().checkLogoStatus();
        }, 5000);
      }

      if (status.status === LogoStatusType.Done) {
        set({ resultImageUrl: status.resultImageUrl });
      }
    } catch (error) {
      set({ error: error instanceof Error ? error.message : 'Failed to check logo status' });
    } finally {
      set({ isChecking: false });
    }

  },
}));

export default useLogoStore;
