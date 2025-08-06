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


interface MenuState {
  isMenuOpen: boolean;    // triggers translateX / visible state
  menuVisible: boolean;   // DOM presence
  openMenu: () => void;
  startCloseMenu: () => void; // triggers animation out
  finishCloseMenu: () => void; // fully unmounts
}

export const useMenuStore = create<MenuState>((set) => ({
  isMenuOpen: false,
  menuVisible: false,

  openMenu: () =>
    set({
      menuVisible: true,
      isMenuOpen: true,
    }),

  startCloseMenu: () =>
    set({
      isMenuOpen: false, // triggers animation out
    }),

  finishCloseMenu: () =>
    set({
      menuVisible: false, // fully unmount after animation
    }),
}));