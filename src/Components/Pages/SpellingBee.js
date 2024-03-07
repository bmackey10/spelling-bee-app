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
        <div className="mx-auto max-w-2xl rounded-3xl ring-1 ring-gray-200 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <WordInput beeLetters={beeLetters}/>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-white py-10 text-center ring-1 ring-inset ring-gray-200 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="h-full">
                <p className="text-base font-semibold text-gray-600">Your found words...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpellingBee;
