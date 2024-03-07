import { useState, useEffect } from "react";
import { getSpellingBeeById } from "../Services/SpellingBees.js"
import WordInput from "../Forms/WordInput.js";
import { useParams } from "react-router-dom";

/* Get the letters for the particular spelling bee the user chose */
const SpellingBee = () => {
  const [beeLetters, setBeeLetters] = useState([]);
  const { beeId } = useParams(); // beeId is the objectId from the URL

  useEffect(() => {
    // Use the ID to get the specific Spelling Bee
    getSpellingBeeById(beeId).then((spellingBee) => {
      // Extract the letters and update state
      setBeeLetters([
        spellingBee.get('letterOne'),
        spellingBee.get('letterTwo'),
        spellingBee.get('letterThree'),
        spellingBee.get('letterFour'),
        spellingBee.get('letterFive'),
        spellingBee.get('letterSix'),
        spellingBee.get('centerLetter'),
      ]);
    }).catch((error) => {
      console.error('Error fetching Spelling Bee by ID:', error);
      console.log(beeId);
    });
  }, [beeId]);

  return (
    <div className="bg-white py-12 sm:py-16 px-16 sm:px-32 xl:px-48 h-full">
      <div className="mx-auto max-w-7xl">
        <WordInput beeLetters={beeLetters}/>
      </div>
    </div>
  );
};

export default SpellingBee;
