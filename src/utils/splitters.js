// /utils/splitters.js

import React from 'react';

export const splitWords = (phrase, refs) => {
  return phrase.split(' ').map((word, i) => {
    const letters = splitLetters(word, refs);
    return (
      <p key={word + "_" + i} className="inline-block mr-2">
        {letters}
      </p>
    );
  });
};

export const splitLetters = (word, refs) => {
  return word.split('').map((letter, i) => (
    <span
      key={letter + "_" + i}
      ref={(el) => refs.current.push(el)}
      className="opacity-0"
    >
      {letter}
    </span>
  ));
};
