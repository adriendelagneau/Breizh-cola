const splitLetters = (word) => {
  return word.split("").map((letter, i) => (
    <span key={letter + "_" + i} ref={el => refs.current.push(el)} className="opacity-0">
      {letter}
    </span>
  ));
};

export const splitWords = (phrase) => {
  return phrase.split(" ").map((word, i) => {
    const letters = splitLetters(word);
    return <p key={word + "_" + i} className="inline-block mr-2">{letters}</p>;
  });
};
