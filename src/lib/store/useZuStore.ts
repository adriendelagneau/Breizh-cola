import { create } from "zustand";

// Store for mesh readiness
interface MeshState {
  ready: boolean;
  isReady: () => void;
}

export const useMeshStore = create<MeshState>((set) => ({
  ready: false,
  isReady: () => set({ ready: true }),
}));

// Store for bubble animation control
interface BubbleState {
  isPlaying: boolean;
  togglePlay: () => void;
}

export const useBubbleStore = create<BubbleState>((set) => ({
  isPlaying: false, // Default to playing
  togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));
