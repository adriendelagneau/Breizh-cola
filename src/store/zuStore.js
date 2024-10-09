import { create } from 'zustand';
import gsap from 'gsap';

// Handle Lennis instance
const useSmoothScroll = create((set) => ({
  isActive: true,
  toggleSmoothState: () => set((state) => ({ isActive: !state.isActive })),
}));


// Handle menus
const useSmallMenu = create((set) => ({
  isSmallMenuOpen: false,
  setSmallMenu: (isSmallMenuOpen) => set({ isSmallMenuOpen }),
  toggleSmallMenu: () => set((state) => ({ isSmallMenuOpen: !state.isSmallMenuOpen })),
}));

const useMenu = create((set, get) => ({
  isMenuOpen: false,
  timelineX: gsap.timeline({ paused: true }), // Store the GSAP timeline here

  // Set the menu state to open or closed
  setMenu: (isMenuOpen) => set({ isMenuOpen }),

  // Play the timeline when opening the menu
  playMenu: () => {
    const { timelineX } = get();
    timelineX.play();  // Play the GSAP animation for menu opening
    set({ isMenuOpen: true }); // Set the menu state to open
  },

  // Reverse the timelineX to close the menu
  reverseMenu: () => {
    const { timelineX } = get();
    timelineX.reverse(); // Reverse the GSAP animation (i.e., play backward)
    set({ isMenuOpen: false }); // Set the menu state to closed
  },

  reversedMenu: () => {
    const { timelineX } = get();
    timelineX.progress(0); // Reset the GSAP timeline to the beginning
    timelineX.pause(); // Pause it to stop any animations
    set({ isMenuOpen: false }); // Set the menu state to closed
  }
}));


// Handle timelines (GSAP)
const useTimelineStore = create(() => ({
  timeline: gsap.timeline(), 
}));

const useTimelineStore2 = create((set, get) => ({
  timeline2: gsap.timeline({ paused: true }),
  playTimeline2: () => {
    const { timeline2 } = get();
    timeline2.play(); 
  },
  resetTimeline2: () => {
    const { timeline2 } = get();
    timeline2.reversed(true); // Resets to initial state
  },
}));

const useTimelineStore3 = create((set, get) => ({
  timeline3: gsap.timeline({ paused: true }),
  playTimeline3: () => {
    const { timeline3 } = get();
    timeline3.play(); 
  },
  resetTimeline3: () => {
    const { timeline3 } = get();
    timeline3.reversed(true); // Resets to initial state
  },
}));

const useTimelineStore4 = create((set, get) => ({
  timeline4: gsap.timeline({ paused: true }),
  playTimeline4: () => {
    const { timeline4 } = get();
    timeline4.play(); 
  },
  resetTimeline4: () => {
    const { timeline4 } = get();
    timeline4.reversed(true); // Resets to initial state
  },
}));


// Handle index (chronology)
const useCurrentIndexStore = create((set) => ({
  currentIndex: 0,
  setCurrentIndex: (index) => set({ currentIndex: index }),
  resetCurrentIndex: () => set({ currentIndex: 0 }), 
}));




export {
  useSmoothScroll,
  useSmallMenu,
  useMenu,
  useTimelineStore,
  useTimelineStore2,
  useTimelineStore3,
  useTimelineStore4,
  useCurrentIndexStore,
};
