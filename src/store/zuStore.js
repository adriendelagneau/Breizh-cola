import { create } from 'zustand';
import gsap from 'gsap';

const useSmoothScroll = create((set) => ({
  isActive: true,
  toggleSmoothState: () => set((state) => ({ isActive: !state.isActive })),
}));

const useSmallMenu = create((set) => ({
  isSmallMenuOpen: false,
  setSmallMenu: (isSmallMenuOpen) => set({ isSmallMenuOpen }),
  toggleSmallMenu: () => set((state) => ({ isSmallMenuOpen: !state.isSmallMenuOpen}))
}));

const useMenu = create((set) => ({
  isMenuOpen: false,
  setMenu: (isMenuOpen) => set({ isMenuOpen }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen}))
}));

const useGSAPTimeline1 = create((set) => ({
  timeline: gsap.timeline(), 
  setTimeline: (timeline) => set({ timeline }), 
}));

const useGSAPTimeline2 = create((set) => ({
  timeline: gsap.timeline(), 
  setTimeline: (timeline) => set({ timeline }), 
}));

const useGSAPTimeline3 = create((set) => ({
  timeline: gsap.timeline(), 
  setTimeline: (timeline) => set({ timeline }), 
}));

const useGSAPTimeline4 = create((set) => ({
  timeline: gsap.timeline(), 
  setTimeline: (timeline) => set({ timeline }), 
}));


export { useSmoothScroll, useSmallMenu, useMenu, useGSAPTimeline1, useGSAPTimeline2, useGSAPTimeline3, useGSAPTimeline4 };

