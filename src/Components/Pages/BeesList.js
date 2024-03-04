import { useState, useEffect } from "react";
import { getAllSpellingBees } from "../Services/SpellingBees.js"

const SpellingBees = () => {

    const [spellingBees, setSpellingBees] = useState([]);

  useEffect(() => {
    getAllSpellingBees().then((spellingBees) => {
        setSpellingBees(spellingBees);
    });
  }, []);

return (
    <div>
    <h1>Spelling Bee Puzzles</h1>
    <ul>
        {spellingBees.map((spellingBee) =>
            (<li key={spellingBee.id}>
            {spellingBee.beeDate}
            </li>)
        )}
    </ul>
    </div>
);
};

export default SpellingBees;