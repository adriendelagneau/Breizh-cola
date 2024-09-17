// utils/splitters.js
import React from 'react';

export const splitWords = (phrase, refs) => {
  return phrase.split(" ").map((word, i) => (
    <p key={i} className="inline-block mr-2">
      {splitLetters(word, refs)}
    </p>
  ));
};

export const splitLetters = (word, refs) => {
  return word.split("").map((letter, i) => (
    <span
      key={i}
      ref={el => el && refs.current.push(el)}
      className="opacity-0"
    >
      {letter}
    </span>
  ));
};
