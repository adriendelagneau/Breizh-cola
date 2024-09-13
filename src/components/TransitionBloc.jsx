"use client";

import React from "react";

const TransitionBloc= () => {
  return (
    <div>
      <div
        id="transition0"
        className="fixed left-0 transition top-[-100%]  z-50 w-1/4 h-screen bg-black"
      ></div>
      <div
        id="transition1"
        className="fixed left-1/4 transition top-[-100%]  z-50 w-1/4 h-screen bg-black"
      ></div>{" "}
      <div
        id="transition2"
        className="fixed left-2/4 transition top-[-100%]  z-50 w-1/4 h-screen bg-black"
      ></div>{" "}
      <div
        id="transition3"
        className="fixed left-3/4 transition top-[-100%]  z-50 w-1/4 h-screen bg-black"
      ></div>
    </div>
  );
};

export default TransitionBloc;
