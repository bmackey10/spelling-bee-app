import WordInput from "../Forms/WordInput.js";
import { useState, useEffect } from "react";

const vowels = ["a", "e", "i", "o", "u"];
const consonants = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const CurrentBee = () => {
  const [beeLetters, setLetters] = useState([]);

  // Later will add in "center letter" and protect against repeat letters
  // Later will add in protection to ensure a pangram is possible
  // Is there an easier way to do this?
  useEffect(() => {
    setLetters([
      vowels[getRandomInt(vowels.length)],
      vowels[getRandomInt(vowels.length)],
      consonants[getRandomInt(consonants.length)],
      consonants[getRandomInt(consonants.length)],
      consonants[getRandomInt(consonants.length)],
      consonants[getRandomInt(consonants.length)],
      consonants[getRandomInt(consonants.length)],
    ]);
  }, []);

  return (
    <div>
      <WordInput beeLetters={beeLetters} />
    </div>
  );
};

export default CurrentBee;
