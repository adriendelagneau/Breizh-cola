import { create } from 'zustand';
import gsap from 'gsap';

const useTimelineStore = create(() => ({
  timeline: gsap.timeline(), // Paused timeline
}));

const useTimelineStore2 = create((set, get) => ({
  timeline2: gsap.timeline({ paused: true }), 
  playTimeline2: () => {
    const { timeline2 } = get();
    timeline2.play(); // Play the timeline
  },
}));

const useTimelineStore3 = create((set, get) => ({
  timeline3: gsap.timeline({ paused: true }), 
  playTimeline3: () => {
    const { timeline3 } = get();
    timeline3.play(); // Play the timeline
  },
}));

const useTimelineStore4 = create((set, get) => ({
  timeline4: gsap.timeline({ paused: true }), 
  playTimeline4: () => {
    const { timeline4 } = get();
    timeline4.play(); // Play the timeline
  },
}));

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
  useTimelineStore,
  useTimelineStore2,
  useTimelineStore3,
  useTimelineStore4
};
