import { create } from 'zustand';
import gsap from 'gsap';

// Generalized GSAP Timeline Store
const createGSAPTimelineStore = () => create((set) => ({
  timeline: gsap.timeline(),
  setTimeline: (timeline) => set({ timeline }),
}));

// Create different instances for each timeline
const useGSAPTimeline1 = createGSAPTimelineStore();
const useGSAPTimeline2 = createGSAPTimelineStore();
const useGSAPTimeline3 = createGSAPTimelineStore();
const useGSAPTimeline4 = createGSAPTimelineStore();

const useSmoothScroll = create((set) => ({
  isActive: true,
  toggleSmoothState: () => set((state) => ({ isActive: !state.isActive })),
}));

const useSmallMenu = create((set) => ({
  isSmallMenuOpen: false,
  setSmallMenu: (isSmallMenuOpen) => set({ isSmallMenuOpen }),
  toggleSmallMenu: () => set((state) => ({ isSmallMenuOpen: !state.isSmallMenuOpen })),
}));

const useMenu = create((set) => ({
  isMenuOpen: false,
  setMenu: (isMenuOpen) => set({ isMenuOpen }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export {
  useSmoothScroll,
  useSmallMenu,
  useMenu,
  useGSAPTimeline1,
  useGSAPTimeline2,
  useGSAPTimeline3,
  useGSAPTimeline4,
};
