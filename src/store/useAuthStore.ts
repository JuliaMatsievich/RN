import { create } from 'zustand';

interface AuthState {
  userPhone: string;
  setUserPhone: (phone: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  userPhone: '',
  setUserPhone: (phone: string) => set({ userPhone: phone }),
}));
