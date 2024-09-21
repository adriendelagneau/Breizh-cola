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
        delay: 0.6,  
      })
  }
};

export const animatePageOut = (href, router, onCompleteCallback) => {
  const animationWrapper = document.getElementById("transition-element");

  if (animationWrapper) {
    const tl = gsap.timeline({
      onComplete: () => {
        router.push(href);
        if (onCompleteCallback) {
          onCompleteCallback();
        }
      }
    });

    tl.set(animationWrapper, {
      xPercent: -100,
    })
    .to(animationWrapper, {
      xPercent: 0,
      duration: 1,
    })
  }
};

