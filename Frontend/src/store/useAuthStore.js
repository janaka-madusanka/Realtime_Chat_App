import { create } from 'zustand';
import axiosInstance from '../axiosInstance.js';

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({ authUser: res.data });
        } catch (error) {
            console.log("Error checking auth: ", error);
            set({ authUser: null });

        } finally {
            set({ isCheckingAuth: false });
        }
    }
}));