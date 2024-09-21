import gsap from "gsap";

export const animatePageIn = () => {
  const transitionElement = document.getElementById("transition-element");

  if (transitionElement) {
    const tl = gsap.timeline();

    tl.set(transitionElement, {
      xPercent: 0,
    })
      .to(transitionElement, {
        xPercent: 100,
        duration: 1,
        delay: 0.6,  // Add delay here for page in
      })
      
  }
};

export const animatePageOut = (href, router, onCompleteCallback) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href); // Navigate to the new page
        if (onCompleteCallback) {
          onCompleteCallback(); // Call the callback to reverse timelines and reset index
        }
      }
    });

    tl
    .to(animationWrapper, {
      xPercent: 0,
      duration: 1,
    })

  }
};
