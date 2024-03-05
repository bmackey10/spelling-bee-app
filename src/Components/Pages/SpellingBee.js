import { useState, useEffect } from "react";
import { getSpellingBeeByID } from "../Services/SpellingBees.js"
import WordInput from "../Forms/WordInput.js";

/* Get the letters for the particular spelling bee the user chose */
const SpellingBee = (beeID) => {
  const [beeLetters, setBeeLetters] = useState([]);

  useEffect(() => {
    // Use the ID to get the specific Spelling Bee
    getSpellingBeeById(beeID).then((spellingBee) => {
      // Extract the letters and update state
      setBeeLetters([
        spellingBee.get('letterOne'),
        spellingBee.get('letterTwo'),
        // ... Add the rest of the letters in the same manner
        spellingBee.get('letterThree'),
        spellingBee.get('letterFour'),
        spellingBee.get('letterFive'),
        spellingBee.get('letterSix'),
        spellingBee.get('centerLetter'),
      ]);
    }).catch((error) => {
      console.error('Error fetching Spelling Bee by ID:', error);
    });
  }, []);

  return (
    <div>
      <WordInput beeLetters={beeLetters} />
    </div>
  );
};

export default SpellingBee;
