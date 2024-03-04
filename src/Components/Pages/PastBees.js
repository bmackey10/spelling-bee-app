import { useState, useEffect } from "react";
import { GetPastBees } from "../Services/GetPastBees.js"

const PastBees = () => {

    const [pastBees, setPastBees] = useState([]);

  useEffect(() => {
    GetPastBees().then((pastBees) => {
      setPastBees(pastBees);
    });
  }, []);

return (
    <div>
    <h1>Past Spelling Bees</h1>
    <ul>
        {pastBees.map((pastBee) =>
            (<li key={pastBee.id}>
            Letters: {pastBee.letters} , Center Letter:
            {pastBee.centerLetter} | Pangram: {pastBee.pangram}, Words:
            {pastBee.words}
            </li>)
        )}
    </ul>
    </div>
);
};

export default PastBees;