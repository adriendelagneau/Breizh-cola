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
        delay: 1,  // Add delay here for page in
      })
      // .to(
      //   transitionElement,
      //   {
      //     borderTopLeftRadius: "50vh",
      //     borderBottomLeftRadius: "50vh",
      //     duration: 0.4,
      //   },
      //   "<"
      // );
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

    tl.set(animationWrapper, {
      xPercent: -100,
      // borderTopRightRadius: "50vh",
      // borderBottomRightRadius: "50vh",
      // borderTopLeftRadius: "0",
      // borderBottomLeftRadius: "0",
    })
    .to(animationWrapper, {
      xPercent: 0,
      duration: 1,
    })
    // .to(animationWrapper, {
    //   borderTopRightRadius: "0",
    //   borderBottomRightRadius: "0",
    //   duration: 0.4,
    // });
  }
};

